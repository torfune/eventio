import Header from '../components/Header'
import { COLOR, HEADER_HEIGHT } from '../constants'
import styled from 'styled-components'
import EventListFilters from '../components/EventListFilters'
import EventList from '../components/EventList'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchAllEventItems } from '../store/events/actions'

export default () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllEventItems())
  }, [])

  return (
    <>
      <Header backgroundColor={COLOR.GREY_BACKGROUND} logoColor="dark" />

      <Container>
        <EventListFilters />
        <EventList />
      </Container>
    </>
  )
}

const Container = styled.div`
  min-height: 100vh;
  background: ${COLOR.GREY_BACKGROUND};
  padding: calc(${HEADER_HEIGHT} + 5rem) 12rem 0;
`
