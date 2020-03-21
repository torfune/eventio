import styled from 'styled-components'
import Link from 'next/link'

const GoBackLink = () => (
  <Link href="/events">
    <a>
      <Container>
        <img src="/icons/arrow-left.svg" />
        <p>Back to events</p>
      </Container>
    </a>
  </Link>
)

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;

  > img {
    position: relative;
    top: -0.1rem;
    margin-right: 0.8rem;
    height: 1.4rem;
  }

  > p {
    font-weight: 500;
  }
`

export default GoBackLink
