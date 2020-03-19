import getEventButtonConfig from './getEventButtonConfig'

const user = { id: 'USER_A' }

const ownedEvent: any = {
  id: 'EVENT_A',
  owner: { id: 'USER_A' },
  attendees: [],
}
const joinedEvent: any = {
  id: 'EVENT_A',
  owner: { id: 'USER_B' },
  attendees: [{ id: 'USER_A' }],
}
const otherEvent: any = {
  id: 'EVENT_A',
  owner: { id: 'USER_B' },
  attendees: [{ id: 'USER_C' }],
}

test('user can edit event', () => {
  const { action } = getEventButtonConfig(ownedEvent, user.id)
  expect(action).toBe('edit')
})

test('user can leave event', () => {
  const { action } = getEventButtonConfig(joinedEvent, user.id)
  expect(action).toBe('leave')
})

test('user can join event', () => {
  const { action } = getEventButtonConfig(otherEvent, user.id)
  expect(action).toBe('join')
})
