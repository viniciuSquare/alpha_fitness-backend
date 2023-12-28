import { PrismaService } from "../src/services/prisma.service";

export async function SeedWorkouts() {
  const service = new PrismaService();

  // CREATE and popule table WORKOUT
  await service.muscleGroup.findMany().then(async muscleGroups => {
    await Promise.all(
      muscleGroups.map(muscleGroup =>
        service.workout.create({
          data: {
            label: muscleGroup.label
          }
        })
      )
    ).finally(() => console.log('Workouts Created by Muscle Group'))
  })
}