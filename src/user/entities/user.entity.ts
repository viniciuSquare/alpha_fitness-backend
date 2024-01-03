import { z } from 'zod';

export class User {
  constructor(
    public name: string,
    public email: string,
    public dateOfBirth: Date,
    public height: number,
    public imageUrl?: string,
  ) {}

  static get creationSchema() {
    return z
      .object({
        name: z
          .string()
          .min(2, { message: 'O Nome deve ter no mínimo 2 caracteres.' }),
        email: z.string().email(),
        dateOfBirth: z.coerce.date(),
        height: z.coerce.number(),
        imageUrl: z.string(),
      })
      .required();
  }

  static get updateSchema() {
    return User.creationSchema
      .extend({
        id: z.coerce.number(),
      })
      .required();
  }
}
