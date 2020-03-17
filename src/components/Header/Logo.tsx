import styled from 'styled-components'
import { FC } from 'react'

interface Props {
  color: string
}

const Logo: FC<Props> = ({ color }) => <Container color={color}>E.</Container>

const Container = styled.p<{ color: string }>`
  font-size: 2rem;
  color: ${props => props.color};
  font-weight: 600;
`

export default Logo
