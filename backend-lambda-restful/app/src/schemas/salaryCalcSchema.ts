import * as Joi from 'joi-i18n';

const salaryCalcSchema = Joi.object().keys({
  salary: Joi.number().required(),
});

export default salaryCalcSchema;
