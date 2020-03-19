import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { signOut } from '../../store/auth/actions'

const SignOutLink = () => {
  const dispatch = useDispatch()

  return <Container onClick={() => dispatch(signOut())}>SIGN OUT</Container>
}

const Container = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;
`

export default SignOutLink
