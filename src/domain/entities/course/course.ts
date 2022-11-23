import { Lesson, Module } from '@/domain/entities'

export class Course {
  public readonly modules: Module[]
  public readonly lessons: Lesson[]
  public readonly contract
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly slug: string,
    public readonly description: string,
    public readonly image: string,
    public readonly created_at: string,
    public readonly updated_at: string,
  ) {}
}
