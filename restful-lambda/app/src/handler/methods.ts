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
import postToDolistSchema from '../schemas/postToDoListSchema';
import { ToDoList } from '../interfaces/ToDoList';
import DynamoDB from '../aws/dynamoDB';
import TABLE_NAMES from '../constants/tableNames';

export const postToDoList = async (event: ICustomAPIGateway): Promise<APIGatewayProxyResult> => {
  const dynamoDb = new DynamoDB();
  const requestBody = await schemaValidator(JSON.parse(event.body), postToDolistSchema) as ToDoList;
  const toDoListItem = {
    owner: requestBody.owner,
    tag: requestBody.tag,
    list: requestBody.list,
  };
  await dynamoDb.put(toDoListItem, TABLE_NAMES.TO_DO_LIST);
  const response = {
    statusCode: HTTP_STATUS_CODE.POST,
    body: JSON.stringify({ message: 'Inserido com sucesso!' }),
    headers: HEADERS.DEFAULT_HEADER,
  } as APIGatewayProxyResult;
  return response;
};

export const getToDoListByTag = async (event: ICustomAPIGateway): Promise<APIGatewayProxyResult> => {
  // seu codigo aqui
  const response = {
    statusCode: HTTP_STATUS_CODE.GET,
    body: JSON.stringify('sua resposta aqui'),
    headers: HEADERS.DEFAULT_HEADER,
  } as APIGatewayProxyResult;
  return response;
};
