import { ManagerModel } from '@/data/models/manager.models'
import { ManagerRepository } from '@/infra/repositories'
import { Injectable } from '@nestjs/common'

@Injectable()
export class ManagerService {
  constructor(private repository: ManagerRepository) {}
  async new(data: ManagerModel): Promise<ManagerModel> {
    return this.repository.new(data)
  }

  async findAll(): Promise<ManagerModel[]> {
    return this.repository.findAll()
  }

  async findByID(id: string): Promise<ManagerModel> {
    return await this.repository.findByID(id)
  }

  async delete(id: string): Promise<Error | string> {
    return this.repository.delete(id)
  }
  async update(idManager: string, data: any): Promise<ManagerModel> {
    return await this.repository.update(idManager, data)
  }
}
