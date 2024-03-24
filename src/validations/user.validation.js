import joi from 'joi';

export const RegisterUserSchema = {
    body: joi.object({
      username: joi.string().required(),
      password: joi.string().required()
    }) 
}

export const LoginUserSchema = {
  body: joi.object({
    username: joi.string().required(),
    password: joi.string().required(),
    role: joi.string().valid("admin", "guest").optional()
  }) 
}