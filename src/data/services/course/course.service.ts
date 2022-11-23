import { ResponseContract } from '@/data/contracts'
import { CourseModel } from '@/data/models'
import { CourseRepository } from '@/infra/repositories'
import { Injectable } from '@nestjs/common'

@Injectable()
export class CourseService {
  constructor(private repository: CourseRepository) {}

  async new(data: CourseModel): Promise<CourseModel> {
    return await this.repository.new(data)
  }

  async findAll(): Promise<CourseModel[]> {
    return await this.repository.findAll()
  }

  async findByID(id: string): Promise<CourseModel> {
    return await this.repository.findByID(id)
  }

  async update(idCourse: string, data: any): Promise<CourseModel> {
    return await this.repository.update(idCourse, data)
  }

  async delete(id: string): Promise<CourseModel | ResponseContract> {
    return await this.repository.delete(id)
  }
}
