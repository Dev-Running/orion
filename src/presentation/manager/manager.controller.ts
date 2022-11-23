import { ManagerContract } from '@/data/contracts'
import { ManagerModel } from '@/data/models'
import { ManagerService } from '@/data/services'
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
export class ManagerController implements ManagerContract {
  constructor(private service: ManagerService) {}

  @Post()
  async new(@Body() body): Promise<ManagerModel> {
    return this.service.new(body)
  }
  @Get(':id')
  async findByID(@Param('id') id: string): Promise<ManagerModel> {
    return this.service.findByID(id)
  }

  @Get()
  async findAll(): Promise<ManagerModel[]> {
    return this.service.findAll()
  }

  @Patch(':id')
  async update(
    @Param('id') idContract: string,
    @Body() data: any,
  ): Promise<ManagerModel> {
    return this.service.update(idContract, data)
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Error | string> {
    return this.service.delete(id)
  }
}
