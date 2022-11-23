import { ResponseContract } from '@/data/contracts'
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
export class ManagerController {
  constructor(private service: ManagerService) {}

  @Post()
  async new(@Body() data: any): Promise<ManagerModel | ResponseContract> {
    return new ResponseContract(
      201,
      'Manager created successfully',
      await this.service.new(data),
    )
  }
  @Get(':id')
  async findByID(
    @Param('id') id: string,
  ): Promise<ManagerModel | ResponseContract> {
    return new ResponseContract(
      200,
      'Manager found successfully',
      await this.service.findByID(id),
    )
  }

  @Get()
  async findAll(): Promise<ManagerModel[] | ResponseContract> {
    return new ResponseContract(
      200,
      'Managers found successfully',
      await this.service.findAll(),
    )
  }

  @Patch(':id')
  async update(
    @Param('id') idContract: string,
    @Body() data: any,
  ): Promise<ManagerModel | ResponseContract> {
    return new ResponseContract(
      200,
      'Manager updated successfully',
      await this.service.update(idContract, data),
    )
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ): Promise<ManagerModel | ResponseContract> {
    return new ResponseContract(
      200,
      'Manager deleted successfully',
      await this.service.delete(id),
    )
  }
}
