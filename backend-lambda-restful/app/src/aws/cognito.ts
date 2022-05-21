/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as AWS from 'aws-sdk';
import { AuthenticationToken } from '../interfaces/AuthenticationToken';

const cognito = new AWS.CognitoIdentityServiceProvider();

class Cognito {
  async singup(userId: string, email: string, password: string) {
    const signParams = {
      ClientId: process.env.CLIENT_ID,
      Password: password,
      Username: userId,
      UserAttributes: [
        {
          Name: 'email',
          Value: email,
        }
      ],
    };

    await cognito.signUp(signParams).promise();
  }

  async signin(userId: string, password: string): Promise<AuthenticationToken> {
    const params = {
      AuthFlow: 'USER_PASSWORD_AUTH',
      ClientId: process.env.CLIENT_ID,
      AuthParameters: {
        USERNAME: userId,
        PASSWORD: password,
      },
    };
    const accessKeys = await cognito.initiateAuth(params).promise();
    const response = {
      access_token: accessKeys.AuthenticationResult.IdToken,
      refresh_token: accessKeys.AuthenticationResult.RefreshToken,
      expires_in: accessKeys.AuthenticationResult.ExpiresIn,
      token_type: accessKeys.AuthenticationResult.TokenType,
    };
    return response;
  }
}

export default Cognito;
