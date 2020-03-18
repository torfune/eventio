import { FC, useEffect, ReactNode } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store/rootReducer'
import { signOut, signInRefresh } from '../store/auth/actions'
import styled from 'styled-components'

interface Props {
  children: ReactNode
}

const Authorize: FC<Props> = ({ children }) => {
  const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.auth.user)

  useEffect(() => {
    if (user) return

    const refreshToken = localStorage.getItem('refreshToken')
    if (!refreshToken) {
      dispatch(signOut())
      return
    }

    dispatch(signInRefresh(refreshToken))
  }, [])

  if (user) {
    return <>{children}</>
  } else {
    return <Spinner />
  }
}

const Spinner = styled.img.attrs({
  src: '/icons/spinner-dark.svg',
})`
  display: block;
  height: 6rem;
  margin: 10rem auto;
`

export default Authorize
