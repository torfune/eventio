import Header from '../components/Header'
import { COLOR, HEADER_HEIGHT } from '../constants'
import styled from 'styled-components'
import EventListFilters from '../components/EventListFilters'
import EventList from '../components/EventList'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchAllEventItems } from '../store/events/actions'
import Button from '../components/Button'
import { signOut } from '../store/auth/actions'
import Authorize from '../components/Authorize'

const EventsPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllEventItems())
  }, [])

  return (
    <>
      <Header
        backgroundColor={COLOR.GREY_PAGE_BACKGROUND}
        logoColor="dark"
        rightComponent={
          <Button size="small" color="grey" onClick={() => dispatch(signOut())}>
            LOGOUT
          </Button>
        }
      />

      <Container>
        <EventListFilters />
        <EventList />
      </Container>
    </>
  )
}

const Container = styled.div`
  min-height: 100vh;
  background: ${COLOR.GREY_PAGE_BACKGROUND};
  padding: calc(${HEADER_HEIGHT} + 5rem) 12rem 0;
`

export default () => (
  <Authorize>
    <EventsPage />
  </Authorize>
)
