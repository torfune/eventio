import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { signOut } from '../../../store/auth/actions'
import Router from 'next/router'

const SignOutLink = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(signOut())
    Router.push('/')
  }

  return <Container onClick={handleClick}>SIGN OUT</Container>
}

const Container = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;
`

export default SignOutLink
