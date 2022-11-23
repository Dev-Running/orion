import { ContractContract, ResponseContract } from '@/data/contracts'
import { ContractModel } from '@/data/models/contract.models'
import { ContractService } from '@/data/services'
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common'

@Controller('contract')
export class ContractController implements ContractContract {
  constructor(private readonly service: ContractService) {}

  @Post()
  async new(
    @Body() data: ContractModel,
  ): Promise<ContractModel | ResponseContract> {
    return new ResponseContract(
      201,
      'Contract created successfully',
      await this.service.new(data),
    )
  }

  @Get()
  async findAll(): Promise<ResponseContract | ContractModel[]> {
    return new ResponseContract(
      200,
      'Contracts found successfully',
      await this.service.findAll(),
    )
  }

  @Get(':id')
  async findByID(
    @Param('id') id: string,
  ): Promise<ContractModel | ResponseContract> {
    return new ResponseContract(
      200,
      'Contract found successfully',
      await this.service.findByID(id),
    )
  }

  @Patch('/cancel/:id')
  async cancelContract(
    @Param('id') id: string,
  ): Promise<ContractModel | ResponseContract> {
    return new ResponseContract(
      200,
      'Contract canceled successfully',
      await this.service.cancelContract(id),
    )
  }

  @Patch(':id')
  async update(
    @Param('id')
    idContract: string,
    @Body()
    data: any,
  ): Promise<ContractModel | ResponseContract> {
    return new ResponseContract(
      200,
      'Contract updated successfully',
      await this.service.update(idContract, data),
    )
  }
}
