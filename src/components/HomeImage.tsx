import styled from 'styled-components'
import { COLOR } from '../constants'

const HomeImage = () => (
  <Container>
    <img src="/images/home.png" />

    <TextSection>
      <p>
        “Great, kid. Don’t
        <br />
        get cocky.”
      </p>
      <span>Han Solo</span>
    </TextSection>
  </Container>
)

const Container = styled.div`
  color: #fff;
  display: inline-flex;
  justify-content: center;

  > img {
    height: 100vh;
    z-index: 0;
  }
`
const TextSection = styled.div`
  position: absolute;
  bottom: 10rem;
  text-align: center;

  > p {
    font-family: 'Playfair Display';
    font-size: 4rem;
    z-index: 1;
    opacity: 0.9;
  }

  > span {
    ::before {
      content: '';
      display: block;
      width: 2rem;
      height: 0.2rem;
      background: ${COLOR.GREEN};
      margin: 2rem auto;
    }

    font-size: 1.8rem;
    color: #888;
  }
`

export default HomeImage
