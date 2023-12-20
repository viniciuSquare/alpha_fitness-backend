import { PrismaService } from "src/services/prisma.service";

const service = new PrismaService();

service.user.createMany({
  data: [
    {
     name: "Klebinho157",
     email: "email@hotmail.com",
     dateOfBirth: "08/02/2001",
     height: 172 
    },
    {
      name: "FaganoteForadaLei",
      email: "email2@hotmail.com",
      dateOfBirth: "07/30/1999",
      height: 180
     },
     {
      name: "QuatroLados",
      email: "email3@hotmail.com",
      dateOfBirth: "04/04/2000",
      height: 194
     }
  ]
})

// CREATE and popule table WORKOUT
service.workout.create({
  data: {
    label: 'Peito'
  }
})



// CREATE EXERCISES 
service.exercise.createMany({
  data: [
    {
      name: 'Supino Reto',
      executionUnit: "REPETITION",
      sugVolume: "12/10/8",
      sugSeries: 3
      
    }
  ]
})


// service.workoutExercise.createMany({
//   data: [
//     {
//       exerciseId: 1

//     }    
//   ]
// })