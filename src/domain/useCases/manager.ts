import { Manager } from '@/domain/entities'

export type ManagerUseCases = {
  new: (data: Manager) => Promise<Manager>
  findByID: (id: string) => Promise<Manager>
  findAll: () => Promise<Manager[]>
  delete: (id: string) => Promise<Error | string>
  update: (idManager: string, data: {}) => Promise<Manager>
}
