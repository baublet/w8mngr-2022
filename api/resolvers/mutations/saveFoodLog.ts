import { MutationResolvers } from "../../graphql-types";
import { foodLogDataService } from "../../dataServices";
import { foodLogPermissionService } from "../../permissionsServices";

export const saveFoodLog: MutationResolvers["saveFoodLog"] = async (
  parent,
  { input },
  context
) => {
  await foodLogPermissionService.assert("create", context);

  await foodLogDataService.upsert(context, input);
  const log = await foodLogDataService.getConnection(context, {
    day: input.day,
  });

  return {
    day: input.day,
    ...log,
  };
};
