import Header from '../components/Header'
import styled from 'styled-components'
import CoverImage from '../components/CoverImage'
import SignInForm from '../components/SignInForm'
import { BP, HEADER_HEIGHT } from '../constants'

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

  @media (max-width: ${BP.TABLET}) {
    display: block;

    > div:first-child {
      display: none;
    }
  }
`
const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media (max-width: ${BP.MOBILE}) {
    flex-direction: column;
    justify-content: flex-start;
    text-align: center;
    padding: calc(${HEADER_HEIGHT} + 2rem) 2rem 2rem;
  }
`
