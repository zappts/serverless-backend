## Olá! Bem vindo ao repositório de treino! 👋


## Instalação

```sh
yarn install 
```

## Vamos ao exercício?

1. Clone esse repositório
2. Você deve ter percebido que esse repositório é bem similar ao repositório restful-lambda-dynamo. Vamos adicionar duas funções de autenticação para nossa TO-DO List.

```
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

```

Observe que estamos utilizando a SDK do Cognito para criar um usuário e fazer login na aplicação.

3. Veja que já estamos utilizando a pasta business para separar a lógica de negócio da nossa aplicação. Utilize o arquivo AuthBusiness para adicionar os dois métodos de autenticação.

```
  async signup(signup: SignUp): Promise<void> {
    const cognito = new Cognito();
    await cognito.singup(signup.user_id, signup.email, signup.password);
  }

  async signin(signin: SignIn): Promise<AuthenticationToken> {
    const cognito = new Cognito();
    const authenticationToken = await cognito.signin(signin.user_id, signin.password);
    return authenticationToken;
  }
```

4. Agora vamos adicionar ao handler as funções de sign up e sign in

```
  sing up
  const requestBody = await schemaValidator(JSON.parse(event.body), signUpSchema) as SignUp;
  const authBusiness = new AuthBusiness();
  await authBusiness.signup(requestBody);

  sign in
  const requestBody = await schemaValidator(JSON.parse(event.body), signInSchema) as SignIn;
  const authBusiness = new AuthBusiness();
  const authenticationToken = await authBusiness.signin(requestBody);
```

5. Compacte a pasta dist (escolha o formato .zip)
6. Acesse a Lambda na AWS e faça upload do arquivo compactado 
7. Edite a Lambda e escolha como o handler o caminho /dist/handler/method.(metodos)
8. Utilize a aba de teste para enviar eventos para a sua Lambda

9. Atualize o API Gateway com o autorizador cognito

## Autora

👤 **Thauany Moedano**


## Gostou?

Deixa uma ⭐️ se você gostou desse projeto!
