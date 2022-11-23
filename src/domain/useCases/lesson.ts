import { Lesson } from '@/domain/entities'

export type LessonUseCases = {
  new: (data: Lesson) => Promise<Lesson>
  findByID: (id: string) => Promise<Lesson>
  findAll: () => Promise<Lesson[]>
  delete: (id: string) => Promise<Error>
  update: (idLesson: string, data: {}) => Promise<Lesson>
}
