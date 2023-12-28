import { Workout } from "src/workout/entities/workout.entity"

export class Routine {
  constructor(
    public label          : string,
    public startDate      : string,
    public endDate        : number,
    public deleteWhenEnded: number,
    public workouts?      : Workout[],
  ) { }

  public parsePrismaModel() {
    return '';
  }

}
