import { z } from "zod";
import { Workout } from "../entities/workout.entity";

export type CreateWorkoutDto = z.infer<typeof Workout.creationSchema>