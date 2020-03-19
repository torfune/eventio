import filterEventsByCategory from './filterEventsByCategory'
import EventItem from '../api/types/EventItem'

const pastEvent = { id: 'past', startsAt: '2010-04-10T01:18:22.685Z' }
const futureEvent = { id: 'future', startsAt: '2021-04-10T01:18:22.685Z' }
const allEvents = [pastEvent, futureEvent] as EventItem[]

test('filter all events', () => {
  const events = filterEventsByCategory(allEvents, 'all')

  expect(events.length).toBe(allEvents.length)
  expect(events).toContain(pastEvent)
  expect(events).toContain(futureEvent)
})

test('filter past events', () => {
  const events = filterEventsByCategory(allEvents, 'past')

  expect(events).toContain(pastEvent)
  expect(events).not.toContain(futureEvent)
})

test('filter future events', () => {
  const events = filterEventsByCategory(allEvents, 'future')

  expect(events).toContain(futureEvent)
  expect(events).not.toContain(pastEvent)
})
