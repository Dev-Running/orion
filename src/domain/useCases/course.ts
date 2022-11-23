import { ResponseContract } from '@/data/contracts'
import { Course } from '@/domain/entities'

export class CourseUseCases {
  new: (data: Course) => Promise<Course | ResponseContract>
  findByID: (id: string) => Promise<Course | ResponseContract>
  findAll: () => Promise<Course[] | ResponseContract>
  delete: (id: string) => Promise<Course | ResponseContract>
  update: (idCourse: string, data: any) => Promise<Course | ResponseContract>
}
