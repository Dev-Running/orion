export class Contract {
  constructor(
    public id: string,
    public created_at: Date,
    public userId: string,
    public courseId: string,
    public updated_at?: Date,
    public canceled_at?: Date,
  ) {}
}
