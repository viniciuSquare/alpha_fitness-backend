import { SeedExercises } from "./seed-exercises";
import { SeedMuscleGroups } from "./seed-muscle_groups";
import { SeedRoutines } from "./seed-routine";
import { SeedRoutinesWorkouts } from "./seed-routine-workouts";
import { SeedUser } from "./seed-user";
import { SeedWorkouts } from "./seed-workout";

(async () => {
  // await SeedUser();
  // await SeedMuscleGroups();
  // await SeedExercises();
  // await SeedWorkouts()
  await SeedRoutines();
  // await SeedRoutinesWorkouts();
})()
