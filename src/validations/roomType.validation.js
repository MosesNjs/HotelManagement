import joi from 'joi';

export const CreateRoomTypeSchema = {
    body: joi.object({
      name: joi.string().required()
    }) 
}