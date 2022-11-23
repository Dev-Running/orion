import { Lesson } from '@/domain/entities'
export class Module {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public slug: string,
    public created_at: Date,
    public updated_at: Date,
    public courseId: string,
    public lessons?: Lesson[],
    deleted_at?: Date,
  ) {
    if (!lessons) {
      this.lessons = []
    }
  }
}
