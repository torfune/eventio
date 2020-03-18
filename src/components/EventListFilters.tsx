import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store/rootReducer'
import { COLOR } from '../constants'
import { selectCategory, selectViewMode } from '../store/events/actions'
import EventItemCategory from '../types/EventItemCategory'
import EventListViewMode from '../types/EventListViewMode'

const CATEGORIES: Array<{ key: EventItemCategory; label: string }> = [
  {
    label: 'ALL EVENTS',
    key: 'all',
  },
  {
    label: 'FUTURE EVENTS',
    key: 'future',
  },
  {
    label: 'PAST EVENTS',
    key: 'past',
  },
]

const EventListFilters = () => {
  const dispatch = useDispatch()
  const events = useSelector((state: RootState) => state.events)

  const categoryClickHandler = (category: EventItemCategory) => () => {
    if (events.category !== category) {
      dispatch(selectCategory(category))
    }
  }

  const viewModeClickHandler = (viewMode: EventListViewMode) => () => {
    if (events.viewMode !== viewMode) {
      dispatch(selectViewMode(viewMode))
    }
  }

  return (
    <Container>
      <ul>
        {CATEGORIES.map(({ key, label }) => (
          <CategoryItem
            key={key}
            active={events.category === key}
            onClick={categoryClickHandler(key)}
          >
            {label}
          </CategoryItem>
        ))}
      </ul>

      <div>
        <ViewModeItem
          src="/icons/grid-view.svg"
          active={events.viewMode === 'grid'}
          onClick={viewModeClickHandler('grid')}
        />
        <ViewModeItem
          src="/icons/list-view.svg"
          active={events.viewMode === 'list'}
          onClick={viewModeClickHandler('list')}
        />
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;

  > ul {
    display: flex;
    list-style: none;
  }
`
const CategoryItem = styled.li<{ active: boolean }>`
  font-size: 1.4rem;
  font-weight: 600;
  margin-right: 3rem;
  cursor: pointer;
  color: ${props => (props.active ? COLOR.GREY : COLOR.GREY_LIGHT)};

  :last-child {
    margin-right: 0;
  }
`
const ViewModeItem = styled.img<{ active: boolean }>`
  margin-left: 1.5rem;
  opacity: ${props => (props.active ? 1 : 0.2)};
  cursor: pointer;

  :first-child {
    margin-left: 0;
  }
`

export default EventListFilters
