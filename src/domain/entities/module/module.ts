import { Lesson } from '@/domain/entities'
import { randomUUID } from 'crypto'
export class Module {
  constructor(
    public title: string,
    public description: string,
    public slug: string,
    public courseID: string,
    public id?: string,
    public createdAt?: Date,
    public updatedAt?: Date,
    public lessons?: Lesson[],
    public deletedAt?: Date,
  ) {
    if (!this.id) {
      this.id = randomUUID()
    }

    if (!this.createdAt) {
      this.createdAt = new Date()
    }

    this.slug = this.slug.toLowerCase()

    const splited = this.slug.split(' ')
    this.slug = splited.join('-')
  }

  static create(data: Module) {
    return new Module(data.title, data.description, data.slug, data.courseID)
  }
  static assign(data: Module) {
    return new Module(
      data.title,
      data.description,
      data.slug,
      data.courseID,
      data.id,
      data.createdAt,
      data.updatedAt,
      data.lessons,
      data.deletedAt,
    )
  }
}
