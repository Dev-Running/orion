import { Module } from '@/domain/entities'
export type ModuleUseCases = {
  new: (data: Module) => Promise<Module>
  findByID: (id: string) => Promise<Module>
  findAll: () => Promise<Module[]>
  delete: (id: string) => Promise<Error>
  update: (idModule: string, data: {}) => Promise<Module>
}
