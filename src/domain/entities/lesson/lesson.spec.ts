import { Lesson } from './lesson'

describe('lesson entity', () => {
  const lesson = new Lesson(
    'title',
    'SLUG TEST',
    'description',
    'LINK',
    'moduleID',
    'courseID',
  )

  it('should create a lesson', () => {
    expect(lesson).toBeInstanceOf(Lesson)
  })

  it('should be have slug separated by - and in lower case', () => {
    expect(lesson.slug).toBe('slug-test')
  })
  it('should be have link in lower case', () => {
    expect(lesson.link).toBe('link')
  })
  it('should be have createdAt defined, updatedAt undefined and deletedAt undefined', () => {
    expect(lesson.createdAt).toBeDefined()
    expect(lesson.createdAt).toBeInstanceOf(Date)
    expect(lesson.updatedAt).toBeUndefined()
    expect(lesson.deletedAt).toBeUndefined()
  })
  it('should be have id defined', () => {
    expect(lesson.id).toBeDefined()
  })
})
