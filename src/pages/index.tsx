import Header from '../components/Header'
import styled from 'styled-components'
import CoverImage from '../components/CoverImage'
import SignInForm from '../components/SignInForm'

export default () => (
  <>
    <Header
      backgroundColor="transparent"
      logoColor="light"
      rightSection="signUp"
    />

    <Container>
      <CoverImage />
      <ContentWrapper>
        <SignInForm />
      </ContentWrapper>
    </Container>
  </>
)

const Container = styled.div`
  display: grid;
  grid-template-columns: 50rem 1fr;
  height: 100vh;
  overflow: hidden;
`
const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
