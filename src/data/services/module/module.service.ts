import { ModuleModel } from '@/data/models'
import { ModuleRepository } from '@/infra/repositories'
import { Injectable } from '@nestjs/common'

@Injectable()
export class ModuleService {
  constructor(private readonly repository: ModuleRepository) {}

  async new(data: ModuleModel): Promise<ModuleModel> {
    return await this.repository.new(data)
  }

  async findAll(): Promise<ModuleModel[]> {
    return await this.repository.findAll()
  }

  async findAllByCourseID(id: string): Promise<ModuleModel[]> {
    return await this.repository.findAllByCourseID(id)
  }

  async findByID(id: string): Promise<ModuleModel> {
    return await this.repository.findByID(id)
  }

  async update(idModule: string, data: any): Promise<ModuleModel> {
    return await this.repository.update(idModule, data)
  }

  async delete(id: string): Promise<ModuleModel> {
    return await this.repository.delete(id)
  }
}
