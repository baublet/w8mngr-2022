import gql from "graphql-tag";
import userParts from "queries/user.parts";

export default gql`
  mutation login($email: String, $password: String) {
    login(email: $email, password: $password) {
      user {
        ${userParts}
      }
      token
    }
  }
`;
