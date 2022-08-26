/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const AWS = require('aws-sdk');

const cognito = new AWS.CognitoIdentityServiceProvider();

class Cognito {
    async signup(userId, email, password) {
        const signParams = {
            ClientId:  '1826rmb5n0vejbrlr6dcf2kemb', // process.env.CLIENT_ID,
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

    async signin(userId, password) {
        const params = {
            AuthFlow: 'USER_PASSWORD_AUTH',
            ClientId: '1826rmb5n0vejbrlr6dcf2kemb', // process.env.CLIENT_ID,
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

module.exports = Cognito;
