import * as Joi from 'joi-i18n';

const signUpSchema = Joi.object().keys({
  user_id: Joi.string().required(),
  password: Joi.string().required(),
  email: Joi.string().required(),
});

export default signUpSchema;
