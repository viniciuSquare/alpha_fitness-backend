import { z } from 'zod';
import { Exercise } from '../entities/exercise.entity';

export type UpdateExerciseDto = z.infer<typeof Exercise.updateSchema>;
