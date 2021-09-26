import * as Joi from 'joi-i18n';

const postToDolistSchema = Joi.object().keys({
  list: Joi.array().items(Joi.string()).required(),
  tag: Joi.string().required(),
  owner: Joi.string().required(),
});

export default postToDolistSchema;
