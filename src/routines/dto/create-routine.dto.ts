import { IsBoolean, IsDate, IsString } from "class-validator";

export class CreateRoutineDto {
  @IsString()
  public label: string;
  
  @IsDate()
  public startDate: Date;

  @IsDate()
  public endDate: Date;

  @IsBoolean()
  public deleteWhenEnded: boolean;
  // public routineWorkouts?: {}[];
  // public users?: User[];
  // public id?: number; 
}
