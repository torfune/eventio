import styled from 'styled-components'
import Input from './Input'
import Button from './Button'

const SignInForm = () => {
  return (
    <Container>
      <h1>Sign in to Eventio.</h1>
      <h2>Enter your details below.</h2>

      <form noValidate>
        <Input label="Email" type="email" />
        <Input label="Password" type="password" />
      </form>

      <Button>SIGN IN</Button>
    </Container>
  )
}

const Container = styled.div`
  width: 40rem;

  > form {
    margin-bottom: 5rem;
  }
`

export default SignInForm
