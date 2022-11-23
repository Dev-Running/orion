import { ResponseContract } from '@/data/contracts/response.contracts'
import { CourseModel } from '@/data/models'
import { CourseService } from '@/data/services'
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
export class CourseController {
  constructor(private service: CourseService) {}

  @Post()
  async new(
    @Body() data: CourseModel,
  ): Promise<CourseModel | ResponseContract> {
    return new ResponseContract(
      201,
      'Course created successfully',
      await this.service.new(data),
    )
  }

  @Get(':id')
  async findByID(
    @Param('id') id: string,
  ): Promise<CourseModel | ResponseContract> {
    return new ResponseContract(
      200,
      'Course found successfully',
      await this.service.findByID(id),
    )
  }

  @Get()
  async findAll(): Promise<CourseModel[] | ResponseContract> {
    return new ResponseContract(
      200,
      'Courses found successfully',
      await this.service.findAll(),
    )
  }

  @Patch(':id')
  async update(
    @Param('id') idCourse: string,
    @Body() data: any,
  ): Promise<CourseModel | ResponseContract> {
    return new ResponseContract(
      200,
      'Course updated successfully',
      await this.service.update(idCourse, data),
    )
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ): Promise<CourseModel | ResponseContract> {
    return new ResponseContract(
      200,
      'Course deleted successfully',
      await this.service.delete(id),
    )
  }
}
