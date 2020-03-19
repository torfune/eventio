import Header from '../components/Header'
import { COLOR } from '../constants'
import styled from 'styled-components'
import Authorize from '../components/Authorize'
import CreateEventForm from '../components/CreateEventForm'

const CreateEventPage = () => (
  <>
    <Header
      backgroundColor={COLOR.GREY_PAGE_BACKGROUND}
      logoColor="dark"
      rightSection="close"
    />

    <Container>
      <CreateEventForm />
    </Container>
  </>
)

const Container = styled.div`
  min-height: 100vh;
  background: ${COLOR.GREY_PAGE_BACKGROUND};
  display: flex;
  justify-content: center;
  align-items: center;
`

export default () => (
  <Authorize>
    <CreateEventPage />
  </Authorize>
)
