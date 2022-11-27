import { randomUUID } from 'crypto'

export class Contract {
  constructor(
    public userID: string,
    public courseID: string,
    public id?: string,
    public createdAt?: Date,
    public updatedAt?: Date,
    public canceledAt?: Date,
  ) {
    if (!this.createdAt) {
      this.createdAt = new Date()
    }

    if (!this.id) {
      this.id = randomUUID()
    }
  }

  static create(data: Contract) {
    return new Contract(data.userID, data.courseID)
  }

  static assign(data: Contract) {
    return new Contract(
      data.userID,
      data.courseID,
      data.id,
      data.createdAt,
      data.updatedAt,
      data.canceledAt,
    )
  }
}
