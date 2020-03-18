import Header from '../components/Header'
import { COLOR, HEADER_HEIGHT } from '../constants'
import styled from 'styled-components'
import EventListFilters from '../components/EventListFilters'
import EventList from '../components/EventList'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchAllEventItems } from '../store/events/actions'
import Button from '../components/Button'
import { signOut, signInRefresh } from '../store/auth/actions'
import { RootState } from '../store/rootReducer'

export default () => {
  const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.auth.user)

  useEffect(() => {
    if (user) return

    const refreshToken = localStorage.getItem('refreshToken')
    if (!refreshToken) {
      dispatch(signOut())
      return
    }

    dispatch(signInRefresh(refreshToken))
  }, [])

  useEffect(() => {
    if (user) {
      dispatch(fetchAllEventItems())
    }
  }, [user])

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
