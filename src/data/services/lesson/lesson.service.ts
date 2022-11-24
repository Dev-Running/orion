import { ResponseContract } from '@/data/contracts'
import { Lesson } from '@/domain/entities'
import { LessonRepository } from '@/infra/repositories'
import { Injectable } from '@nestjs/common'

@Injectable()
export class LessonService {
  constructor(private repository: LessonRepository) {}
  async new(data: Lesson): Promise<Lesson | ResponseContract> {
    return await this.repository.new(data)
  }
  async findAll(): Promise<ResponseContract | Lesson[]> {
    return await this.repository.findAll()
  }
  async findByID(id: string): Promise<Lesson | ResponseContract> {
    return await this.repository.findByID(id)
  }
  async update(
    idLesson: string,
    data: any,
  ): Promise<Lesson | ResponseContract> {
    return await this.repository.update(idLesson, data)
  }
  async delete(id: string): Promise<Lesson | ResponseContract> {
    return await this.repository.delete(id)
  }
}
