/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import { GradeEvent } from '../interfaces/GradeEvent';
import DynamoDB from '../aws/dynamoDB';
import TABLE_NAMES from '../constants/tableNames';

export const calculateGrades = async (event: GradeEvent): Promise<string> => {
  const { studentId, subject, grades } = event;
  const dynamoDB = new DynamoDB();
  let weight = 1;
  let sum = 0;
  let numberOfGrades = 0;
  for (const grade of grades) {
    sum += (grade * weight);
    numberOfGrades += weight;
    weight++;
  }
  const result = sum / numberOfGrades;
  // salvar no dynamoDB
  const item = {
    studentId,
    [subject]: result,
  };
  await dynamoDB.put(item, TABLE_NAMES.GRADES);
  if (result >= 6) {
    return 'APROVADO';
  }
  return 'REPROVADO';
};
