import { Injectable } from '@nestjs/common';
import { CreateRoutineDto } from './dto/create-routine.dto';
import { UpdateRoutineDto } from './dto/update-routine.dto';
import { PrismaService } from 'src/services/prisma.service';

@Injectable()
export class RoutinesService extends PrismaService {
  async create(createRoutineDto: CreateRoutineDto) {
    return await this.routine.create({
      data: createRoutineDto
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
      }
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} routine`;
  }

  update(id: number, updateRoutineDto: UpdateRoutineDto) {
    return `This action updates a #${id} routine`;
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
