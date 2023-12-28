import { Injectable } from '@nestjs/common';
import { CreateRoutineDto } from './dto/create-routine.dto';
import { UpdateRoutineDto } from './dto/update-routine.dto';
import { PrismaService } from 'src/services/prisma.service';

@Injectable()
export class RoutinesService extends PrismaService{
  create(createRoutineDto: CreateRoutineDto) {
    return 'This action adds a new routine';
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

  remove(id: number) {
    return `This action removes a #${id} routine`;
  }
}
