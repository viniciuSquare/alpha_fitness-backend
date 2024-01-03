import { z } from 'zod';
import { User } from '../entities/user.entity';

export type UpdateUserDto = z.infer<typeof User.updateSchema>;
