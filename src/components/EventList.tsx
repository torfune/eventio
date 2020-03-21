import styled, { css } from 'styled-components'
import EventItemRow from './EventItemRow'
import { useSelector } from 'react-redux'
import { RootState } from '../store/rootReducer'
import EventItemCard from './EventItemCard'
import EventListViewMode from '../types/EventListViewMode'
import filterEventsByCategory from '../utils/filterEventsByCategory'
import { BP } from '../constants'

const EventList = () => {
  const { itemsLoading, items, category, viewMode } = useSelector(
    (state: RootState) => state.events
  )

  return (
    <Container viewMode={viewMode}>
      {itemsLoading ? (
        <img src="/icons/spinner-dark.svg" alt="Loading ..." />
      ) : (
        filterEventsByCategory(items, category).map(eventItem =>
          viewMode === 'grid' ? (
            <EventItemCard key={eventItem.id} eventItem={eventItem} />
          ) : (
            <EventItemRow key={eventItem.id} eventItem={eventItem} />
          )
        )
      )}
    </Container>
  )
}

const Container = styled.div<{ viewMode: EventListViewMode }>`
  margin-top: 4rem;

  /* Spinner */
  > img {
    height: 6rem;
    display: block;
    margin: 10rem auto;
  }

  /* Grid view */
  ${props =>
    props.viewMode === 'grid' &&
    css`
      display: flex;
      flex-wrap: wrap;
      margin-right: -2rem;

      @media (max-width: ${BP.MOBILE}) {
        margin-right: 0;
      }
    `}
`

export default EventList
