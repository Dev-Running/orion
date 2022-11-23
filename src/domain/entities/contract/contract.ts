export class Contract {
  constructor(
    public id: string,
    public createdAt: Date,
    public userID: string,
    public courseID: string,
    public updatedAt?: Date,
    public canceledAt?: Date,
  ) {}
}
