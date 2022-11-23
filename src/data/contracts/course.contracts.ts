import { CourseUseCases } from '@/domain/useCases'
import { CourseModel } from '../models'

export class CourseContract implements CourseUseCases {
  new: (data: CourseModel) => Promise<CourseModel>
  findAll: () => Promise<CourseModel[]>
  findByID: (id: string) => Promise<CourseModel>
  delete: (id: string) => Promise<Error | string>
  update: (idCourse: string, data: any) => Promise<CourseModel>
}
