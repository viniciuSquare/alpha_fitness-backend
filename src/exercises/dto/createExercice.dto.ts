import { z } from 'zod';
import { Exercise } from '../entities/exercise.entity';

export type CreateExerciseDto = z.infer<typeof Exercise.creationSchema>;
