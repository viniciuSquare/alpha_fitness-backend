import { PrismaService } from "../src/services/prisma.service";

export async function SeedMuscleGroups() {
  const service = new PrismaService();
  
  await service.muscleGroup.createMany({
    data: [
      {
        label: 'Peito'
      },
      {
        label: 'Biceps'
      },
      {
        label: 'Abdomen'
      },
      {
        label: 'Ombros'
      },
      {
        label: 'Triceps'
      },
      {
        label: 'Costas'
      },
      {
        label: 'Lombar'
      },
      {
        label: 'Gêmeos'
      },
      {
        label: 'Coxas'
      }
    ]
  }).finally(()=> console.log('Muscle Groups created'))
}