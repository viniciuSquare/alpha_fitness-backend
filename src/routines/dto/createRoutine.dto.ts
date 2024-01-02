import { z } from "zod";
import { Routine } from "../entities/routine.entity";

export type CreateRoutineDto = z.infer<typeof Routine.creationSchema>
