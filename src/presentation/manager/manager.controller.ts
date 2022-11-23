import { ManagerRepository } from '@/data/contracts/manager.contracts'
import { Manager } from '@/domain/entities'
import { ManagerService } from '@/infra/services'
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common'

@Controller('manager')
export class ManagerController implements ManagerRepository {
  constructor(private service: ManagerService) {}

  @Post()
  async new(@Body() body) {
    return this.service.new(body)
  }
  @Get(':id')
  async findByID(@Param('id') id: string): Promise<Manager> {
    return this.service.findByID(id)
  }

  @Get()
  async findAll(): Promise<Manager[]> {
    return this.service.findAll()
  }

  @Patch(':id')
  async update(
    @Param('id') idContract: string,
    @Body() data: any,
  ): Promise<Manager> {
    return this.service.update(idContract, data)
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Error | string> {
    return this.service.delete(id)
  }
}
