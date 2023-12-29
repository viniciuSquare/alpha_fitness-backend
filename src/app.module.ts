import { Module } from '@nestjs/common';
import { ExerciseModule } from './exercises/exercises.module';
import { RoutinesModule } from './routines/routines.module';
import { UserModule } from './user/user.module';
import { WorkoutModule } from './workout/workout.module';

@Module({
  imports: [
    ExerciseModule, 
    RoutinesModule, 
    UserModule, 
    WorkoutModule
  ]
})
export class AppModule { }
