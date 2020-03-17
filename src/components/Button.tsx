import { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { COLOR } from '../constants'

interface Props {
  children: ReactNode
}

const Button: FC<Props> = ({ children }) => <Container>{children}</Container>

const Container = styled.button`
  background: ${COLOR.GREEN};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  width: 22rem;
  border: 0;
  color: #fff;
  border-radius: 0.3rem;
  font-weight: 600;
  font-size: 1.4rem;
  letter-spacing: 0.2rem;
  transition: background-color 100ms;

  :hover {
    background: ${COLOR.GREEN_HOVER};
  }

  :focus {
    border: 0.1rem solid ${COLOR.GREY};
  }
`

export default Button
