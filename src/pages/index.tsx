import Header from '../components/Header'
import SignUpMessage from '../components/Header/SignUpMessage'
import styled from 'styled-components'
import HomeImage from '../components/HomeImage'
import SignInForm from '../components/SignInForm'

export default () => (
  <>
    <Header
      backgroundColor="transparent"
      logoColor="light"
      rightComponent={<SignUpMessage />}
    />

    <Container>
      <HomeImage />
      <ContentWrapper>
        <SignInForm />
      </ContentWrapper>
    </Container>
  </>
)

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  height: 100vh;
  overflow: hidden;
`
const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
