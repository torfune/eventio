import styled from 'styled-components'
import { COLOR } from '../constants'

const SignUpMessage = () => (
  <Container>
    Don't have an account? <span>SIGN UP</span>
  </Container>
)

const Container = styled.p`
  color: ${COLOR.GREY};
  display: flex;
  align-items: center;

  > span {
    margin-left: 1rem;
    font-weight: 600;
    font-size: 1.4rem;
  }
`

export default SignUpMessage
