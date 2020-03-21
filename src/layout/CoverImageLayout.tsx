import Header from '../components/shared/Header'
import styled from 'styled-components'
import CoverImage from '../components/CoverImage'
import { BP, HEADER_HEIGHT } from '../constants'
import { ReactNode, FC } from 'react'

interface Props {
  children: ReactNode
}

const CoverImageLayout: FC<Props> = ({ children }) => (
  <>
    <Header
      backgroundColor="transparent"
      logoColor="light"
      rightSection="signUp"
    />

    <Container>
      <CoverImage />
      <ContentWrapper>{children}</ContentWrapper>
    </Container>
  </>
)

const Container = styled.div`
  display: grid;
  grid-template-columns: 50rem 1fr;
  height: 100vh;

  @media (max-width: ${BP.TABLET}) {
    display: block;

    /* Cover image */
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

export default CoverImageLayout
