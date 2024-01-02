import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { UpdateWorkoutDto } from './dto/updateWorkout.dto';
import { CreateWorkoutDto } from './dto/createWorkout.dto';

@Injectable()
export class WorkoutService extends PrismaService {
  create(createWorkoutDto: CreateWorkoutDto) {
    return this.workout.create({ 
      data: createWorkoutDto
    })
  }

  findAll() {
    return this.workout.findMany()
  }

  findOne(id: number) {
    return `This action returns a #${id} workout`;
  }

  update(id: number, updateWorkoutDto: UpdateWorkoutDto) {
    return `This action updates a #${id} workout`;
  }

  remove(id: number) {
    return `This action removes a #${id} workout`;
  }
}
