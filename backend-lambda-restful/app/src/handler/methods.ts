/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import { APIGatewayProxyResult } from 'aws-lambda';
import { ICustomAPIGateway } from '../interfaces/CustomAPIGateway';
import HTTP_STATUS_CODE from '../constants/httpStatusCode';
import HEADERS from '../constants/headers';

import { schemaValidator } from '../utils/commonsValidator';
import salaryCalcSchema from '../schemas/salaryCalcSchema';
import { SalaryEvent } from '../interfaces/SalaryEvent';

import signUpSchema from '../schemas/signUpSchema';
import signInSchema from '../schemas/singInSchema';
import { SignUp } from '../interfaces/SignUp';
import { SignIn } from '../interfaces/SignIn';
import { AuthBusiness } from '../business/AuthBusiness';

export const postSalaryCalc = async (event: ICustomAPIGateway): Promise<APIGatewayProxyResult> => {
  const requestBody = await schemaValidator(JSON.parse(event.body), salaryCalcSchema) as SalaryEvent;
  const { salary } = requestBody;
  let inssDeduction;
  // inss table
  if (salary <= 1212) {
    inssDeduction = salary * 0.075;
  } else if (salary >= 1212.01 && salary <= 2427.35) {
    inssDeduction = salary * 0.09 - 18.18;
  } else if (salary >= 2427.36 && salary <= 3641.03) {
    inssDeduction = salary * 0.12 - 91.00;
  } else {
    inssDeduction = salary * 0.14 - 163.82;
  }

  const response = {
    statusCode: HTTP_STATUS_CODE.POST,
    body: JSON.stringify({ inss: inssDeduction }),
    headers: HEADERS.DEFAULT_HEADER,
  } as APIGatewayProxyResult;
  return response;
};

export const signup = async (event: ICustomAPIGateway): Promise<APIGatewayProxyResult> => {
  const requestBody = await schemaValidator(JSON.parse(event.body), signUpSchema) as SignUp;
  const authBusiness = new AuthBusiness();
  await authBusiness.signup(requestBody);
  const response = {
    statusCode: HTTP_STATUS_CODE.POST,
    body: JSON.stringify({ message: 'Usuário criado com sucesso!' }),
    headers: HEADERS.DEFAULT_HEADER,
  } as APIGatewayProxyResult;
  return response;
};

export const signin = async (event: ICustomAPIGateway): Promise<APIGatewayProxyResult> => {
  const requestBody = await schemaValidator(JSON.parse(event.body), signInSchema) as SignIn;
  const authBusiness = new AuthBusiness();
  const authenticationToken = await authBusiness.signin(requestBody);
  const response = {
    statusCode: HTTP_STATUS_CODE.POST,
    body: JSON.stringify(authenticationToken),
    headers: HEADERS.DEFAULT_HEADER,
  } as APIGatewayProxyResult;
  return response;
};
