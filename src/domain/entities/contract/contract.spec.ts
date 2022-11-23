import { Contract } from './contract'

describe('Contract', () => {
  it('should be defined', () => {
    expect(
      new Contract('1', new Date(), 'user1', 'course1', new Date()),
    ).toBeDefined()
  })

  it('should have a canceled at with date undefined', () => {
    expect(
      new Contract('1', new Date(), 'user1', 'course1', new Date()).canceled_at,
    ).toBe(undefined)
  })
  it('should have a updated at with date undefined', () => {
    expect(new Contract('1', new Date(), 'user1', 'course1').updated_at).toBe(
      undefined,
    )
  })
})
