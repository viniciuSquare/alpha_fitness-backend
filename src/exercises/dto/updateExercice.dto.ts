import { z } from 'zod';
import { Exercise } from '../entities/exercise.entity';

export type updateExercise = z.infer<typeof Exercise.updateSchema>;
