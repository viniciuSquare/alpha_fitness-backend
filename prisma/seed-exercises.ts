import { PrismaService } from "../src/services/prisma.service";

export async function SeedExercises() {
  const service = new PrismaService();

  // CREATE EXERCISES 
  service.exercise.createMany({
    data: [
      {
        name: 'Supino Reto',
        executionUnit: "REPETITION",
        sugVolume: "12/10/8",
        sugSeries: 3,
        muscleGroupId: 1
      },

    ]
  })

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
    ).finally(()=> console.log('Workouts Created by Muscle Group'))
  })
}