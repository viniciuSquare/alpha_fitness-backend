import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { CreateExerciseDto } from './dto/createExercice.dto';
import { UpdateExerciseDto } from './dto/updateExercice.dto';

@Controller('exercises')
export class ExercisesController {
  constructor(private readonly ExercisesService: ExercisesService) {}

  @Post()
  create(@Body() createExerciseDto: CreateExerciseDto) {
    return this.ExercisesService.create(createExerciseDto);
  }

  @Get()
  findAll() {
    return this.ExercisesService.findAll();
  }

  @Get(':id') // '12' - 'texto'
  findByUser(@Param('id') id: string) {
    const formattedId = +id;

    if(isNaN(formattedId)) {
      return 
      // JOGO ERRO
    } else {
      return this.ExercisesService.findByUser(+id);
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExerciseDto: UpdateExerciseDto) {
    return this.ExercisesService.update(+id, updateExerciseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ExercisesService.remove(+id);
  }
}
