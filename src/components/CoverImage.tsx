import styled from 'styled-components'
import { COLOR } from '../constants'

const CoverImage = () => (
  <Container>
    <p>
      “Great, kid. Don’t
      <br />
      get cocky.”
    </p>
    <span>Han Solo</span>
  </Container>
)

const Container = styled.div`
  background: url('/images/cover.png');
  background-position: center;
  background-size: cover;
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 10rem;

  /* Quoted text */
  > p {
    font-family: 'Playfair Display';
    font-size: 4rem;
    z-index: 1;
    opacity: 0.9;
  }

  /* Text author */
  > span {
    font-size: 1.8rem;
    color: #888;

    ::before {
      content: '';
      display: block;
      width: 2rem;
      height: 0.2rem;
      background: ${COLOR.GREEN};
      margin: 2rem auto;
    }
  }
`

export default CoverImage
