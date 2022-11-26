import { Contract, Lesson, Module } from '@/domain/entities'
import { randomUUID } from 'crypto'

export class Course {
  constructor(
    public readonly title: string,
    public readonly slug: string,
    public readonly description: string,
    public readonly image: string,
    public readonly id?: string,
    public readonly createdAt?: Date,
    public readonly updatedAt?: Date,
    public readonly modules?: Module[],
    public readonly lessons?: Lesson[],
    public readonly contracts?: Contract[],
  ) {
    // Slug => this-is-a-slug
    this.slug = this.slug.toLowerCase()
    const splited = this.slug.split(' ')
    this.slug = splited.join('-')

    if (!this.id) {
      this.id = randomUUID()
    }

    if (!this.createdAt) {
      this.createdAt = new Date()
    }
  }
}
