import { LessonContract, ResponseContract } from '@/data/contracts'
import { LessonService } from '@/data/services'
import { Lesson } from '@/domain/entities'
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common'

@Controller('lesson')
export class LessonController implements LessonContract {
  constructor(private readonly lessonService: LessonService) {}

  @Post()
  async new(@Body() data: Lesson): Promise<Lesson | ResponseContract> {
    return new ResponseContract(
      201,
      'Lesson created successfully',
      await this.lessonService.new(data),
    )
  }

  @Get()
  async findAll(): Promise<ResponseContract | Lesson[]> {
    return new ResponseContract(
      200,
      'Lessons found successfully',
      await this.lessonService.findAll(),
    )
  }

  @Get(':id')
  async findByID(@Param(':id') id: string): Promise<Lesson | ResponseContract> {
    return new ResponseContract(
      200,
      'Lesson found successfully',
      await this.lessonService.findByID(id),
    )
  }

  @Patch(':id')
  async update(
    @Param(':id')
    idLesson: string,
    @Body()
    data: any,
  ): Promise<Lesson | ResponseContract> {
    return new ResponseContract(
      200,
      'Lesson updated successfully',
      await this.lessonService.update(idLesson, data),
    )
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Lesson | ResponseContract> {
    return new ResponseContract(
      200,
      'Lesson deleted successfully',
      await this.lessonService.delete(id),
    )
  }
}
