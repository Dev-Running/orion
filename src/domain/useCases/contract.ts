import { Contract } from '@/domain/entities'

export type ContractUseCases = {
  new: (data: Contract) => Promise<Contract>
  findByID: (id: string) => Promise<Contract>
  findAll: () => Promise<Contract[]>
  cancelContract: (id: string) => Promise<Error>
  update: (idContract: string, data: {}) => Promise<Contract>
}
