export class Lesson {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly slug: string,
    public readonly description: string,
    public readonly created_at: string,
    public readonly updated_at: string,
    public readonly link: string,
    public readonly moduleId: string,
    public readonly courseId: string,
  ) {}
}
