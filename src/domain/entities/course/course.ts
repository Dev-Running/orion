import { Contract, Lesson, Module } from '@/domain/entities'

export class Course {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly slug: string,
    public readonly description: string,
    public readonly image: string,
    public readonly createdAt: Date,
    public readonly updatedAt?: Date,
    public readonly modules?: Module[],
    public readonly lessons?: Lesson[],
    public readonly contract?: Contract[],
  ) {}
}
