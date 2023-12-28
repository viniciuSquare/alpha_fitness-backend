import { PrismaService } from "../src/services/prisma.service";

export async function SeedRoutinesWorkouts() {
  const service = new PrismaService();

  // CREATE ROUTINES 
  service.routineWorkout.createMany({
    data: [
      {
        routineId: 1,
        workoutId: 1,
        dayOfTheWeek: 'Monday',
        order: 1
      },

    ]
  }).finally(()=>console.log('Routines Created'))
}