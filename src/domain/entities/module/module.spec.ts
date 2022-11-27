import { Module } from './module'

describe('module entity', () => {
  const module = new Module('title', 'description', 'SLUG TEST', 'courseID')

  it('should be create a new Module', () => {
    expect(
      Module.create({
        title: 'title',
        courseID: 'courseID',
        slug: 'slug',
        description: 'teste',
      }),
    ).toBeInstanceOf(Module)
  })

  it('should be assign a new Module', () => {
    expect(Module.assign(module)).toBeInstanceOf(Module)
  })

  it("should have a slug like 'slug-test'", () => {
    expect(module.slug).toBe('slug-test')
  })

  it('should be defined createdAt', () => {
    expect(module.createdAt).toBeDefined()
    expect(module.createdAt).toBeInstanceOf(Date)
  })
})
