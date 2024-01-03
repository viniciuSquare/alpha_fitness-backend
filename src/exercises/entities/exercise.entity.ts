import { z } from 'zod';
import { Muscle } from './muscle.entity';

export class Exercise {
  constructor(
    public label: string,
    public rest: string,
    public sugVolume: string,
    public sugSeries: string,
    public executionUnit: 'time' | 'repetitions',
    public muscleGroupId?: number,
  ) {}

  static get creationSchema() {
    return z
      .object({
        label: z.string().min(2),
        rest: z.coerce.number(),
        sugVolume: z.string(),
        sugSeries: z.string(),
      })
      .required();
  }

  static get updateSchema() {
    return Exercise.creationSchema
      .extend({
        id: z.coerce.number(),
      })
      .required();
  }
}
