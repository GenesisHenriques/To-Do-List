const Joi = require('@hapi/joi');

const MESSAGE = 'Invalid entries. Try again';

const validationCreateTask = (data) => {
  const { error } = Joi.object({
    title: Joi.string().required().messages({
      'any.required': MESSAGE,
      'string.base': MESSAGE,
    }),
    description: Joi.string().required().messages({
      'any.required': MESSAGE,
      'string.base': MESSAGE,
    }),
    status: Joi.string().required().messages({
      'any.required': MESSAGE,
      'string.base': MESSAGE,
    }),
  }).validate(data);
  return error;
};

module.exports = {
  validationCreateTask,
};