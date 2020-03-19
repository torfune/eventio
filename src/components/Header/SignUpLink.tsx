import styled from 'styled-components'
import { COLOR } from '../../constants'

const SignUpLink = () => (
  <Container>
    Don't have an account? <span>SIGN UP</span>
  </Container>
)

const Container = styled.p`
  color: ${COLOR.GREY_TEXT_DARK};
  display: flex;
  align-items: center;
  justify-content: flex-end;

  > span {
    margin-left: 1rem;
    font-weight: 600;
    font-size: 1.4rem;
  }
`

export default SignUpLink
