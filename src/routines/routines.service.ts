import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { CreateRoutineDto } from './dto/createRoutine.dto';
import { UpdateRoutineDto } from './dto/updateRoutine.dto';

@Injectable()
export class RoutinesService extends PrismaService {
  async create(createRoutineDto: CreateRoutineDto) {
    return await this.routine.create({
      data: {...createRoutineDto}
    })
  }

  async findAll() {
    return await this.routine.findMany();
  }

  async findByUserId(userId: number) {
    return await this.routine.findMany({
      where: {
        UserRoutine: {
          some: {
            userId
          }
        }
      },
      include: {
        RoutineWorkout: true,
        UserRoutine: true,
      }
    });
  }

  findOne(id: number) {
    return this.routine.findFirst({
      where: {
        id
      }
    })
  }

  update(id: number, updateRoutineDto: UpdateRoutineDto) {
    return this.routine.update({
      where: {
        id
      },
      data: updateRoutineDto
    })
  }

  async setRoutineToUser(routineId: number, userId: number) {
    try {
      return await this.userRoutine.create({
        data: {
          routineId,
          userId
        }
      })
    }
    catch(e) {
      console.log(e)
    }
  }

  remove(id: number) {
    return `This action removes a #${id} routine`;
  }
}
