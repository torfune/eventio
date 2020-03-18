import { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { COLOR } from '../constants'

interface Props {
  children: ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  loading?: boolean
}

const Button: FC<Props> = ({ children, className, type, loading }) => (
  <Container className={className} type={type}>
    {loading ? <img src="/icons/spinner.svg" /> : children}
  </Container>
)

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
  transition: background-color 150ms;

  > img {
    height: 2.5rem;
  }

  :hover {
    background: ${COLOR.GREEN_HOVER};
  }

  :focus {
    border: 0.1rem solid ${COLOR.GREY};
  }
`

export default Button
