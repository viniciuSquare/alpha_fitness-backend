import { Workout } from 'src/workout/entities/workout.entity';
import { z } from 'zod';

export class Routine {
  constructor(
    public label: string,
    public startDate: Date,
    public endDate: Date,
    public deleteWhenEnded: boolean,
    public workouts?: Workout[],
  ) {}

  public parsePrismaModel() {
    return '';
  }

  static get creationSchema() {
    return z
      .object({
        label: z.string(),
        startDate: z.coerce.date(),
        endDate: z.coerce.date(),
        deleteWhenEnded: z.boolean(),
      })
      .required();
  }

  static get updateSchema() {
    return Routine.creationSchema
      .extend({
        id: z.coerce.number(),
      })
      .required();
  }

  static get routineToUserSchema() {
    return z
      .object({
        routineId: z.number(),
        userId: z.number(),
      })
      .required();
  }
}
