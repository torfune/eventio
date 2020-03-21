import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store/rootReducer'
import { COLOR, BP } from '../constants'
import { selectCategory, selectViewMode } from '../store/events/actions'
import EventCategory from '../types/EventCategory'
import EventListViewMode from '../types/EventListViewMode'

const CATEGORIES: Array<{ key: EventCategory; label: string }> = [
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

  const categoryClickHandler = (category: EventCategory) => () => {
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

      <MobileCategorySelector>
        <p>SHOW:</p>
        <select
          value={events.category}
          onChange={({ target }) => {
            dispatch(selectCategory(target.value as EventCategory))
          }}
        >
          {CATEGORIES.map(({ key, label }) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
      </MobileCategorySelector>

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

  > ul {
    display: flex;
    list-style: none;

    @media (max-width: ${BP.MOBILE}) {
      display: none;
    }
  }
`
const CategoryItem = styled.li<{ active: boolean }>`
  font-size: 1.4rem;
  font-weight: 600;
  margin-right: 3rem;
  cursor: pointer;
  color: ${props =>
    props.active ? COLOR.GREY_TEXT_DARK : COLOR.GREY_TEXT_LIGHT};

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
const MobileCategorySelector = styled.div`
  display: none;

  @media (max-width: ${BP.MOBILE}) {
    display: flex;
    align-items: center;

    > p {
      font-size: 1.4rem;
      font-weight: 600;
      margin-right: 1rem;
    }
  }
`

export default EventListFilters
