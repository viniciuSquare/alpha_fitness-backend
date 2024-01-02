import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, ValidationPipe, UsePipes } from '@nestjs/common';
import { ZodValidationPipe } from 'src/pipes/ZodValidationPipe';

import { RoutinesService } from './routines.service';
import { Routine } from './entities/routine.entity';
import { CreateRoutineDto } from './dto/createRoutine.dto';
import { RoutineToUserDto } from './dto/userRoutine.dto';
import { UpdateRoutineDto } from './dto/updateRoutine.dto';

@Controller('routines')
export class RoutinesController {
  constructor(private readonly routinesService: RoutinesService) { }

  @Post()
  create(@Body(new ZodValidationPipe(Routine.creationSchema)) createRoutineDto: CreateRoutineDto) {
    return this.routinesService.create(createRoutineDto);
  }

  @Get()
  findAll() {
    return this.routinesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.routinesService.findOne(id);
  }

  @Get('/by-user/:id')
  findByUserId(@Param('id', ParseIntPipe) id: number) {
    return this.routinesService.findByUserId(id);
  }

  @Post('/set-to-user')
  setRoutineToUser(@Body(new ZodValidationPipe(Routine.routineToUserSchema)) routineToUser: RoutineToUserDto) {
    console.log(routineToUser)
    return this.routinesService.setRoutineToUser(routineToUser.routineId, routineToUser.userId);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateRoutineDto: UpdateRoutineDto) {
    return this.routinesService.update(id, updateRoutineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.routinesService.remove(id);
  }
}
