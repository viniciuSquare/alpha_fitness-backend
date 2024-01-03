import { z } from 'zod';
import { User } from '../entities/user.entity';

export type CreateUserDto = z.infer<typeof User.creationSchema>;
