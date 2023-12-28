import { PrismaService } from "../src/services/prisma.service";

export async function SeedRoutines() {
  const service = new PrismaService();

  // CREATE ROUTINES 
  service.routine.createMany({
    data: [
      {
        label: "Jan 2024 - Hiperthophy",
        startDate: new Date('2024-01-01'),
        endDate: new Date('2024-01-01'),
        deleteWhenEnded: true
      },

    ]
  }).finally(()=>console.log('Routines Created'))
}