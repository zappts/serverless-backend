/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import { SalaryEvent } from '../interfaces/SalaryEvent';
import { SalaryResponse } from '../interfaces/SalaryResponse';

export const salaryCalc = async (event: SalaryEvent): Promise<SalaryResponse> => {
  const { salary } = event;
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
  return (
    {
      inss: inssDeduction,
    }
  );
};
