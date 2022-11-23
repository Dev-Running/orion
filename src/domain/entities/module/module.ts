import { Lesson } from '@/domain/entities'
export class Module {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public slug: string,
    public courseID: string,
    public createdAt?: Date,
    public updatedAt?: Date,
    public lessons?: Lesson[],
    public deletedAt?: Date,
  ) {}
}
