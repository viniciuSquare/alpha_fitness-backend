import { PrismaService } from "../src/services/prisma.service";

export async function SeedExercises() {
  const service = new PrismaService();

  // CREATE EXERCISES 
  const muscleGroup = await service.muscleGroup.findFirst({
    where: {
      label: 'Peito'
    }
  })

  await service.exercise.createMany({
    data: [
      {
        label: 'Supino Reto',
        executionUnit: "REPETITION",
        sugVolume: "12/10/8",
        sugSeries: 3,
        muscleGroupId: muscleGroup.id
      },
      {
        label: "Supino Inclinado",
        executionUnit: "REPETITION",
        sugVolume: "12",
        sugSeries: 3,
        muscleGroupId: muscleGroup.id
      },
      {
        label: "Voador",
        executionUnit: "REPETITION",
        sugVolume: "12/10/8",
        sugSeries: 3,
        muscleGroupId: muscleGroup.id
      }
    ]
  }).finally(()=>console.log('Exercises Created'))
}