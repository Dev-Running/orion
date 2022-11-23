import { ResponseContract } from '@/data/contracts'
import { ContractModel } from '@/data/models/contract.models'

export class ContractUseCases {
  new: (data: ContractModel) => Promise<ContractModel | ResponseContract>
  findByID: (id: string) => Promise<ContractModel | ResponseContract>
  findAll: () => Promise<ContractModel[] | ResponseContract>
  cancelContract: (id: string) => Promise<ContractModel | ResponseContract>
  update: (
    idContract: string,
    data: any,
  ) => Promise<ContractModel | ResponseContract>
}
