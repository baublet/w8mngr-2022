import React from "react";
import { useHistory } from "react-router-dom";

import { useForm, useToast } from "../helpers";
import { ContentLayout } from "../components/Containers/ContentLayout";
import { ContentContainer } from "../components/Containers/ContentContainer";
import { PageHeading } from "../components/Type/PageHeading";
import { useLoginMutation, GetCurrentUserDocument } from "../generated";
import { Form, Input } from "../components/Forms";
import { SecondaryButton } from "../components/Button/Secondary";
import { Link } from "../components/Link";

export function Login() {
  const { push } = useHistory();
  const loginForm = useForm<{
    email: string;
    password: string;
  }>();
  const { error } = useToast();

  const [login, { loading }] = useLoginMutation({
    variables: {
      input: loginForm.getValues(),
    },
    refetchQueries: [GetCurrentUserDocument],
    onCompleted: () => push("/"),
    onError: error,
  });

  const submit = React.useCallback(() => {
    login({
      variables: {
        input: loginForm.getValues(),
      },
    });
  }, []);

  return (
    <div>
      <PageHeading>Login</PageHeading>
      <ContentContainer>
        <ContentLayout
          mainContent={
            <Form
              loading={loading}
              onSubmit={submit}
              className="flex flex-col gap-4"
            >
              <Input
                type="text"
                placeholder="your@email.address"
                label="Email"
                onChange={loginForm.getHandler("email")}
                value={loginForm.getValue("email")}
                focusOnFirstRender
                labelPlacement="bottom"
              />
              <Input
                type="password"
                placeholder="Password"
                label="Password"
                onChange={loginForm.getHandler("password")}
                value={loginForm.getValue("password")}
                labelPlacement="bottom"
              />
              <div className="flex gap-4 items-center">
                <SecondaryButton onClick={submit} size="lg">
                  Login
                </SecondaryButton>
                <div className="text-sm">
                  <Link to="/forgot-password">forgot password</Link>
                </div>
              </div>
            </Form>
          }
        />
      </ContentContainer>
    </div>
  );
}
