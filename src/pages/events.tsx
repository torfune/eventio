import Header from '../components/Header'
import { COLOR, HEADER_HEIGHT } from '../constants'
import styled from 'styled-components'
import EventListFilters from '../components/EventListFilters'
import EventList from '../components/EventList'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchAllEventItems } from '../store/events/actions'
import Button from '../components/Button'
import { signOut } from '../store/auth/actions'
import Authorize from '../components/Authorize'
import CircleButton from '../components/CircleButton'
import Link from 'next/link'
import { RootState } from '../store/rootReducer'

const EventsPage = () => {
  const dispatch = useDispatch()
  const eventsFetched = useSelector(
    (state: RootState) => state.events.itemsFetched
  )

  useEffect(() => {
    if (!eventsFetched) {
      dispatch(fetchAllEventItems())
    }
  }, [])

  return (
    <>
      <Header
        backgroundColor={COLOR.GREY_PAGE_BACKGROUND}
        logoColor="dark"
        rightSection="signOut"
      />

      <Container>
        <ContentWrapper>
          <EventListFilters />
          <EventList />
        </ContentWrapper>

        <Link href="/create-event">
          <a>
            <CreateEventButton
              iconSrc="/icons/plus.svg"
              backgroundColor={COLOR.GREY_TEXT_DARK}
            />
          </a>
        </Link>
      </Container>
    </>
  )
}

const Container = styled.div`
  min-height: 100vh;
  background: ${COLOR.GREY_PAGE_BACKGROUND};
  padding: calc(${HEADER_HEIGHT} + 5rem) 8rem 0;
`
const ContentWrapper = styled.div`
  max-width: 139rem;
  margin: 0 auto;
`
const CreateEventButton = styled(CircleButton)`
  position: fixed;
  bottom: 6rem;
  right: 6rem;
`

export default () => (
  <Authorize>
    <EventsPage />
  </Authorize>
)
