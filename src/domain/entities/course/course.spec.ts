import { Course } from './course'

describe('Course entity', () => {
  const a = new Course('TITLE', 'SLUG TEST', 'description', 'image')
  it('should create a new Course entity', () => {
    expect(a).toBeInstanceOf(Course)
  })

  it('should be slug separated by - ', () => {
    expect(a.slug).toBe('slug-test')
  })

  it('should be lessons and modules undefined', () => {
    expect(a.lessons).toBeUndefined()
    expect(a.modules).toBeUndefined()
  })
  it('should be defined the date of createdAt', () => {
    expect(a.createdAt).toBeDefined()
    expect(a.createdAt).toBeInstanceOf(Date)
    expect(a.createdAt).toEqual(expect.any(Date))
  })
  it('should be have a id provided by entity', () => {
    expect(a.id).toBeDefined()
  })

  const b = new Course(
    'TITLE',
    'SLUG TEST',
    'description',
    'image',
    'id',
    new Date(),
    undefined,
    [
      {
        id: '123',
        slug: 'test',
        title: 'test',
        description: 'test',
        lessons: [],
        createdAt: new Date(),
        courseID: '123',
      },
    ],
    [
      {
        id: '123',
        slug: 'test',
        title: 'test',
        description: 'test',
        link: 'test',
        courseID: '123',
        createdAt: new Date(),
        moduleID: 'test',
      },
    ],
    [{ id: 'test', courseID: '123', createdAt: new Date(), userID: '123' }],
  )

  it('should create a new course entity', () => {
    expect(b).toBeInstanceOf(Course)
  })
  it('should be have updated at undefined', () => {
    expect(b.updatedAt).toBeUndefined()
  })
  it('should be have lessons, modules and contracts defineds', () => {
    expect(b.lessons).toBeDefined()
    expect(b.modules).toBeDefined()
    expect(b.contracts).toBeDefined()
  })
})
