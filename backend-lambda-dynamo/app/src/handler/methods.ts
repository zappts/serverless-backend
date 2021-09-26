/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import { GradeEvent } from '../interfaces/GradeEvent';
// import DynamoDB from '../aws/dynamoDB';

export const calculateGrades = async (event: GradeEvent): Promise<string> => {
  console.log(event);
  return 'Insira seu código aqui';
};
