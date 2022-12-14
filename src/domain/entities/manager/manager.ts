export class Manager {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public password: string,
    public createdAt?: Date,
    public updatedAt?: Date,
    public deletedAt?: Date,
  ) {
    if (!updatedAt) {
      this.updatedAt = null
    }
    if (!deletedAt) {
      this.deletedAt = null
    }
  }
}
