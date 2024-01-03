import { z } from 'zod';
import { Exercise } from '../entities/exercise.entity';

export type CreateExercise = z.infer<typeof Exercise.creationSchema>;
