import joi from 'joi';

export const battleSchema = joi.object({
  firstUser: joi.string().trim().required(),
  secondUser: joi.string().trim().required(),
});
