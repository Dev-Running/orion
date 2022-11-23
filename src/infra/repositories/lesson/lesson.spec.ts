import { LessonRepository } from './lesson.repository'

describe('Lesson', () => {
  it('should be defined', () => {
    expect(new LessonRepository()).toBeDefined()
  })
})
