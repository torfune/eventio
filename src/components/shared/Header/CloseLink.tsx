import styled from 'styled-components'
import Link from 'next/link'

const CloseLink = () => (
  <Link href="/events">
    <a>
      <Container>
        <img src="/icons/cross.svg" />
        <p>Close</p>
      </Container>
    </a>
  </Link>
)

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;

  /* Cross image */
  > img {
    position: relative;
    top: -0.1rem;
    margin-right: 0.8rem;
    height: 1.4rem;
  }

  /* Close text */
  > p {
    font-weight: 500;
  }
`

export default CloseLink
