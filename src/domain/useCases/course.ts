import { Course } from '@/domain/entities'

export type CourseUseCases = {
  new: (data: Course) => Promise<Course>
  findByID: (id: string) => Promise<Course>
  findAll: () => Promise<Course[]>
  delete: (id: string) => Promise<Error>
  update: (idCourse: string, data: {}) => Promise<Course>
}
