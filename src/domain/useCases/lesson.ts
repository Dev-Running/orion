import { ResponseContract } from '@/data/contracts'
import { Lesson } from '@/domain/entities'

export class LessonUseCases {
  new: (data: Lesson) => Promise<Lesson | ResponseContract>
  findByID: (id: string) => Promise<Lesson | ResponseContract>
  findAll: () => Promise<Lesson[] | ResponseContract>
  delete: (id: string) => Promise<Lesson | ResponseContract>
  update: (idLesson: string, data: any) => Promise<Lesson | ResponseContract>
}
