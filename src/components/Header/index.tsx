import styled from 'styled-components'
import { FC, ReactNode } from 'react'
import Logo from './Logo'

interface Props {
  backgroundColor: string
  logoColor: string
  centerComponent?: ReactNode
  rightComponent?: ReactNode
}

const Header: FC<Props> = ({
  backgroundColor,
  logoColor,
  centerComponent,
  rightComponent,
}) => (
  <Container background={backgroundColor}>
    <Logo color={logoColor} />
    {centerComponent || <div />}
    {rightComponent || <div />}
  </Container>
)

const Container = styled.div<{ background: string }>`
  background: ${props => props.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3rem;
`

export default Header
