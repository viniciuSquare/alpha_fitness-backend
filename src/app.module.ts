import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
