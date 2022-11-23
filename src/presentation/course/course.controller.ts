import { CourseContract } from '@/data/contracts'
import { CourseModel } from '@/data/models'
import { CourseService } from '@/infra/services'
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common'

@Controller('course')
export class CourseController implements CourseContract {
  constructor(private service: CourseService) {}

  @Post()
  async new(@Body() data: CourseModel): Promise<CourseModel> {
    return await this.service.new(data)
  }

  @Get(':id')
  async findByID(@Param('id') id: string): Promise<CourseModel> {
    return await this.service.findByID(id)
  }

  @Get()
  async findAll(): Promise<CourseModel[]> {
    return await this.service.findAll()
  }

  @Patch(':id')
  async update(
    @Param('id') idCourse: string,
    @Body() data: any,
  ): Promise<CourseModel> {
    return await this.service.update(idCourse, data)
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Error | string> {
    return await this.service.delete(id)
  }
}
