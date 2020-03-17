import styled from 'styled-components'

const SignUpMessage = () => (
  <Container>
    Don't have an account? <span>SIGN UP</span>
  </Container>
)

const Container = styled.p`
  color: #888;
  display: flex;
  align-items: center;

  > span {
    margin-left: 1rem;
    color: #444;
    font-weight: 600;
    font-size: 0.9rem;
  }
`

export default SignUpMessage
