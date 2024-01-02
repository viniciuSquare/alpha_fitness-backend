import { z } from "zod";
import { Routine } from "../entities/routine.entity";

export type UpdateRoutineDto = z.infer<typeof Routine.updateSchema>
