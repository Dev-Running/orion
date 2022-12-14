import { randomUUID } from 'crypto'
export class Lesson {
  constructor(
    public readonly title: string,
    public readonly slug: string,
    public readonly description: string,
    public readonly link: string,
    public readonly moduleID: string,
    public readonly courseID: string,
    public readonly id?: string,
    public readonly createdAt?: Date,
    public readonly updatedAt?: Date,
    public readonly deletedAt?: Date,
  ) {
    this.slug = this.slug.toLowerCase()
    const splited = this.slug.split(' ')
    this.slug = splited.join('-')

    if (!this.createdAt) {
      this.createdAt = new Date()
    }
    if (!this.id) {
      this.id = randomUUID()
    }

    this.link = this.link.toLowerCase()
  }

  static create(data: Lesson): Lesson {
    return new Lesson(
      data.title,
      data.slug,
      data.description,
      data.link,
      data.moduleID,
      data.courseID,
    )
  }

  static assign(data: Lesson): Lesson {
    return new Lesson(
      data.title,
      data.slug,
      data.description,
      data.link,
      data.moduleID,
      data.courseID,
      data.id,
      data.createdAt,
      data.updatedAt,
      data.deletedAt,
    )
  }
}
