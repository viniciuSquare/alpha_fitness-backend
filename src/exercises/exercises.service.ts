import { Injectable } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { PrismaService } from 'src/services/prisma.service';

@Injectable()
export class ExercisesService extends PrismaService {
  create(createExerciseDto: CreateExerciseDto) {
    return 'This action adds a new exercise';
  }

  async findAll() {
    return await this.exercise.findMany();
  }

  // GET EXERCISES FROM USER
  async findByUser(userId: number) {
    return await this.exercise.findMany({
      where: {
       WorkoutExerciseExecution: {
        some: {
          userId
        }
       } 
      }
    });
  }

  findOne(id: number) {
    return this.exercise.findFirst({
      where: {
        id: id
      }
    })
  }

  update(id: number, updateExerciseDto: UpdateExerciseDto) {
    return `This action updates a #${id} exercise`;
  }

  remove(id: number) {
    return `This action removes a #${id} exercise`;
  }
}
