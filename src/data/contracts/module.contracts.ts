import { ModuleModel } from '@/data/models'
import { ModuleUseCases } from '@/domain/useCases'

export class ModuleContract implements ModuleUseCases {
  new: (data: ModuleModel) => Promise<ModuleModel>
  findAll: () => Promise<ModuleModel[]>
  findAllByCourseID: (id: string) => Promise<ModuleModel[]>
  findByID: (id: string) => Promise<ModuleModel>
  update: (idModule: string, data: {}) => Promise<ModuleModel>
  delete: (id: string) => Promise<Error | object>
}
