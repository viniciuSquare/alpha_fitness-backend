import { z } from "zod";
import { Workout } from "../entities/workout.entity";

export type UpdateWorkoutDto = z.infer<typeof Workout.updateSchema>