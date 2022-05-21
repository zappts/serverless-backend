/* eslint-disable import/prefer-default-export */
import { AuthenticationToken } from '../interfaces/AuthenticationToken';
import { SignUp } from '../interfaces/SignUp';
import { SignIn } from '../interfaces/SignIn';

import Cognito from '../aws/cognito';

export class AuthBusiness {
  async signup(signup: SignUp): Promise<void> {
    const cognito = new Cognito();
    await cognito.singup(signup.user_id, signup.email, signup.password);
  }

  async signin(signin: SignIn): Promise<AuthenticationToken> {
    const cognito = new Cognito();
    const authenticationToken = await cognito.signin(signin.user_id, signin.password);
    return authenticationToken;
  }
}
