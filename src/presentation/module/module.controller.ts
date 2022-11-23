import { ModuleContract } from '@/data/contracts'
import { ModuleModel } from '@/data/models'
import { ModuleService } from '@/data/services/module/module.service'
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common'

@Controller('module')
export class ModuleController implements ModuleContract {
  constructor(private readonly service: ModuleService) {}

  @Post()
  async new(@Body() data: ModuleModel): Promise<ModuleModel> {
    return await this.service.new(data)
  }

  @Get()
  async findAll(): Promise<ModuleModel[]> {
    return await this.service.findAll()
  }

  @Get('/course/:id')
  async findAllByCourseID(@Param('id') id: string): Promise<ModuleModel[]> {
    return await this.service.findAllByCourseID(id)
  }

  @Get(':id')
  async findByID(@Param('id') id: string): Promise<ModuleModel> {
    return await this.service.findByID(id)
  }

  @Patch(':id')
  async update(
    @Param('id') idModule: string,
    @Body() data: any,
  ): Promise<ModuleModel> {
    return await this.service.update(idModule, data)
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<object | Error> {
    return await this.service.delete(id)
  }
}
