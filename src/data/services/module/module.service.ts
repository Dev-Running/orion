import { ModuleModel } from '@/data/models'
import { ModuleRepository } from '@/infra/repositories'
import { Injectable } from '@nestjs/common'

@Injectable()
export class ModuleService {
  constructor(private readonly repo: ModuleRepository) {}

  async new(data: ModuleModel): Promise<ModuleModel> {
    return await this.repo.new(data)
  }

  async findAll(): Promise<ModuleModel[]> {
    return await this.repo.findAll()
  }

  async findAllByCourseID(id: string): Promise<ModuleModel[]> {
    return await this.repo.findAllByCourseID(id)
  }

  async findByID(id: string): Promise<ModuleModel> {
    return await this.repo.findByID(id)
  }

  async update(idModule: string, data: any): Promise<ModuleModel> {
    return await this.repo.update(idModule, data)
  }

  async delete(id: string): Promise<object | Error> {
    return await this.repo.delete(id)
  }
}
