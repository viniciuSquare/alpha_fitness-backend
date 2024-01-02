import { z } from "zod";

export class Workout {
  constructor( public label: string ) { }

  static get creationSchema() {
    return z.object({
      label: z.string()
    }).required()
  }

  static get updateSchema() {
    return Workout.creationSchema.extend({
      id: z.number()
    })
  }
}