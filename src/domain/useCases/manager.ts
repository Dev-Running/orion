import { ResponseContract } from '@/data/contracts'
import { Manager } from '@/domain/entities'

export class ManagerUseCases {
  new: (data: Manager) => Promise<Manager | ResponseContract>
  findByID: (id: string) => Promise<Manager | ResponseContract>
  findAll: () => Promise<Manager[] | ResponseContract>
  delete: (id: string) => Promise<Manager | ResponseContract>
  update: (idManager: string, data: {}) => Promise<Manager | ResponseContract>
}
