export class Lesson {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly slug: string,
    public readonly description: string,
    public readonly link: string,
    public readonly moduleID: string,
    public readonly courseID: string,
    public readonly createdAt: Date,
    public readonly updatedAt?: Date,
    public readonly deletedAt?: Date,
  ) {}
}
