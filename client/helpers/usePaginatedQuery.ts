import React from "react";
import { NetworkStatus } from "@apollo/client";
import { useHistory, useLocation } from "react-router";

type HookFunction = (args: {
  fetchPolicy?: any;
  variables: {
    input: {
      before?: string;
      after?: string;
      first?: number;
      last?: number;
      filter?: Record<string, any>;
    };
  };
}) => {
  networkStatus: NetworkStatus;
  loading: boolean;
  data?: Record<string, any>;
};

type NotNullOrUndefined<T> = Exclude<T, null | undefined>;

type HookFilters<T extends HookFunction> = NotNullOrUndefined<
  NotNullOrUndefined<Parameters<T>[0]["variables"]>["input"]
>["filter"];

type GetConnectionFn<T extends HookFunction, TNode = any> = (
  data: ReturnType<T>["data"]
) =>
  | undefined
  | {
      pageInfo: {
        totalCount: number;
        hasNextPage: boolean;
        hasPreviousPage: boolean;
      };
      edges: {
        cursor: string;
        node: TNode;
      }[];
    };

export function usePaginatedQuery<
  THookFn extends HookFunction,
  TGetConnection extends GetConnectionFn<THookFn>
>(
  useQuery: THookFn,
  {
    filter,
    perPage = 3,
    getConnection,
  }: {
    filter?: HookFilters<THookFn>;
    perPage?: number;
    getConnection: TGetConnection;
  }
): {
  loading: boolean;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  totalCount: number;
  nextPage: () => void;
  previousPage: () => void;
  nodes: NotNullOrUndefined<
    NotNullOrUndefined<ReturnType<TGetConnection>>["edges"]
  >[number]["node"][];
} {
  const { push } = useHistory();

  const { search, pathname: baseUrl } = useLocation();
  const queryParams = React.useMemo(
    () => new URLSearchParams(search),
    [search, baseUrl]
  );

  const cursor = queryParams.get("cursor");
  const beforeOrAfter = queryParams.get("beforeOrAfter") || "after";
  const firstOrLast = queryParams.get("firstOrLast") || "first";

  const { data, networkStatus } = useQuery({
    fetchPolicy: "cache-and-network",
    variables: {
      input: {
        [beforeOrAfter]: cursor,
        [firstOrLast]: perPage,
      },
    },
  });

  const connection = getConnection(data) || {
    edges: [],
    pageInfo: {
      totalCount: 0,
      hasNextPage: false,
      hasPreviousPage: false,
    },
  };
  const edges = connection.edges;
  const nodes = edges.map((edge) => edge.node);
  const firstCursor = edges[0]?.cursor;
  const lastCursor = edges[edges.length - 1]?.cursor;
  const loading = isLoading(networkStatus);

  return {
    loading,
    nodes,
    totalCount: connection.pageInfo.totalCount,
    hasNextPage: connection.pageInfo.hasNextPage,
    hasPreviousPage: connection.pageInfo.hasPreviousPage,
    nextPage: () => {
      queryParams.set("cursor", lastCursor);
      queryParams.set("beforeOrAfter", "after");
      queryParams.set("firstOrLast", "first");
      push(`${baseUrl}?${queryParams.toString()}`);
    },
    previousPage: () => {
      queryParams.set("cursor", firstCursor);
      queryParams.set("beforeOrAfter", "before");
      queryParams.set("firstOrLast", "last");
      push(`${baseUrl}?${queryParams.toString()}`);
    },
  } as any;
}

function isLoading(status: NetworkStatus): boolean {
  switch (status) {
    case NetworkStatus.loading:
      return true;
    case NetworkStatus.fetchMore:
      return true;
    case NetworkStatus.setVariables:
      return true;
  }
  return false;
}
