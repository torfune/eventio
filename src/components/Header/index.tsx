import styled from 'styled-components'
import { FC, ReactNode } from 'react'
import { HEADER_HEIGHT } from '../../constants'

interface Props {
  backgroundColor: string
  logoColor: 'light' | 'dark'
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
    <img src={`/icons/logo-${logoColor}.svg`} />
    {centerComponent || <div />}
    {rightComponent || <div />}
  </Container>
)

const Container = styled.div<{ background: string }>`
  background: ${props => props.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 6rem;
  position: fixed;
  width: 100vw;
  height: ${HEADER_HEIGHT};
  z-index: 1;

  > img:first-child {
    height: 3rem;
  }
`

export default Header
