import { ResponseContract } from '@/data/contracts'
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
export class ModuleController {
  constructor(private readonly service: ModuleService) {}

  @Post()
  async new(
    @Body() data: ModuleModel,
  ): Promise<ModuleModel | ResponseContract> {
    return new ResponseContract(
      201,
      'Module created successfully',
      await this.service.new(data),
    )
  }

  @Get()
  async findAll(): Promise<ModuleModel[] | ResponseContract> {
    return new ResponseContract(
      200,
      'Modules found successfully',
      await this.service.findAll(),
    )
  }

  @Get('/course/:id')
  async findAllByCourseID(
    @Param('id') id: string,
  ): Promise<ModuleModel[] | ResponseContract> {
    return new ResponseContract(
      200,
      'Modules found successfully',
      await this.service.findAllByCourseID(id),
    )
  }

  @Get(':id')
  async findByID(
    @Param('id') id: string,
  ): Promise<ModuleModel | ResponseContract> {
    return new ResponseContract(
      200,
      'Module found successfully',
      await this.service.findByID(id),
    )
  }

  @Patch(':id')
  async update(
    @Param('id') idModule: string,
    @Body() data: any,
  ): Promise<ModuleModel | ResponseContract> {
    return new ResponseContract(
      200,
      'Module updated successfully',
      await this.service.update(idModule, data),
    )
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ): Promise<ModuleModel | ResponseContract> {
    return new ResponseContract(
      200,
      'Module deleted successfully',
      await this.service.delete(id),
    )
  }
}
