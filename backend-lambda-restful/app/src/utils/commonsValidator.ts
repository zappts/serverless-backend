/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as Joi from 'joi-i18n';

export const isNull = (attr: unknown) => attr === undefined || attr === null;

export const isEmpty = (attr: string) => attr === '';

export const schemaValidator = (body: unknown, schema: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Joi.validate(body, schema, (err: Error, value: unknown) => {
    if (err) {
      throw err;
    }
  });
  return body;
};
