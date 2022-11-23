import { ResponseContract } from '@/data/contracts'
import { Module } from '@/domain/entities'
export class ModuleUseCases {
  new: (data: Module) => Promise<Module | ResponseContract>
  findByID: (id: string) => Promise<Module | ResponseContract>
  findAllByCourseID: (id: string) => Promise<Module[] | ResponseContract>
  findAll: () => Promise<Module[] | ResponseContract>
  delete: (id: string) => Promise<Module | ResponseContract>
  update: (idModule: string, data: any) => Promise<Module | ResponseContract>
}
