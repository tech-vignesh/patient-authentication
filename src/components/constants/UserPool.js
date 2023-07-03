import { CognitoUserPool } from "amazon-cognito-identity-js";

const userPoolData = {
    UserPoolId: "eu-north-1_arHhJitGD",
    ClientId: "532k44t4ksvp0q2kk5mbqbtcaa"
}

export default new CognitoUserPool(userPoolData);