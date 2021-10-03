/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import { APIGatewayProxyResult } from 'aws-lambda';
import { ICustomAPIGateway } from '../interfaces/CustomAPIGateway';
import HTTP_STATUS_CODE from '../constants/httpStatusCode';
import HEADERS from '../constants/headers';

import { schemaValidator } from '../utils/commonsValidator';
import postToDolistSchema from '../schemas/postToDoListSchema';
import signUpSchema from '../schemas/signUpSchema';
import signInSchema from '../schemas/singInSchema';
import { ToDoList } from '../interfaces/ToDoList';
import { SignUp } from '../interfaces/SignUp';
import { SignIn } from '../interfaces/SignIn';
import { ToDoListBusiness } from '../business/ToDoListBusiness';
import { AuthBusiness } from '../business/AuthBusiness';

export const postToDoList = async (event: ICustomAPIGateway): Promise<APIGatewayProxyResult> => {
  const requestBody = await schemaValidator(JSON.parse(event.body), postToDolistSchema) as ToDoList;
  const toDoListBusiness = new ToDoListBusiness();
  await toDoListBusiness.postToDoList(requestBody);
  const response = {
    statusCode: HTTP_STATUS_CODE.POST,
    body: JSON.stringify({ message: 'Inserido com sucesso!' }),
    headers: HEADERS.DEFAULT_HEADER,
  } as APIGatewayProxyResult;
  return response;
};

export const getToDoListByTag = async (event: ICustomAPIGateway): Promise<APIGatewayProxyResult> => {
  const toDoListBusiness = new ToDoListBusiness();
  const { tag } = event.pathParameters;
  const item = await toDoListBusiness.getToDoListByTag(tag);
  const response = {
    statusCode: HTTP_STATUS_CODE.GET,
    body: JSON.stringify(item),
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
