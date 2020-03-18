import styled from 'styled-components'
import EventItemRow from './EventItemRow'
import { useSelector } from 'react-redux'
import { RootState } from '../store/rootReducer'
import EventItemCard from './EventItemCard'

const EventList = () => {
  const events = useSelector((state: RootState) => state.events)

  return (
    <Container>
      {events.loading ? (
        <img src="/icons/spinner-dark.svg" />
      ) : (
        events.filteredItems.map(eventItem =>
          events.viewMode === 'grid' ? (
            <EventItemCard key={eventItem.id} eventItem={eventItem} />
          ) : (
            <EventItemRow key={eventItem.id} eventItem={eventItem} />
          )
        )
      )}
    </Container>
  )
}

const Container = styled.div`
  > img {
    height: 6rem;
    display: block;
    margin: 10rem auto;
  }
`

export default EventList
