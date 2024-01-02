import { z } from "zod";
import { Routine } from "../entities/routine.entity";

export type RoutineToUserDto = z.infer<typeof Routine.routineToUserSchema>
