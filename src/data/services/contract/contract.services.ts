import { ContractContract, ResponseContract } from '@/data/contracts'
import { ContractModel } from '@/data/models/contract.models'
import { ContractRepository } from '@/infra/repositories'
import { Injectable } from '@nestjs/common'

@Injectable()
export class ContractService implements ContractContract {
  constructor(private repository: ContractRepository) {}

  async new(data: ContractModel): Promise<ContractModel | ResponseContract> {
    return await this.repository.new(data)
  }

  async findByID(id: string): Promise<ContractModel | ResponseContract> {
    return await this.repository.findByID(id)
  }
  async findAll(): Promise<ContractModel[] | ResponseContract> {
    return await this.repository.findAll()
  }
  async cancelContract(id: string): Promise<ContractModel | ResponseContract> {
    return await this.repository.cancelContract(id)
  }
  async update(
    idContract: string,
    data: any,
  ): Promise<ContractModel | ResponseContract> {
    return await this.repository.update(idContract, data)
  }
}
