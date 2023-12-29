import { IsNumber } from "class-validator";

export default class UserRoutineDto {
  // @IsNumber()
  public userId: number;
  
  @IsNumber()
  public routineId: number;
}