import { ManagerUseCases } from '@/domain/useCases'
import { ManagerModel } from '../models/manager.models'

export class ManagerContract implements ManagerUseCases {
  new: (data: ManagerModel) => Promise<ManagerModel>
  findByID: (id: string) => Promise<ManagerModel>
  findAll: () => Promise<ManagerModel[]>
  delete: (id: string) => Promise<Error | string>
  update: (idManager: string, data: {}) => Promise<ManagerModel>
}
