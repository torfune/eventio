import styled from 'styled-components'
import { FC } from 'react'
import { HEADER_HEIGHT } from '../../constants'
import CenterSection from './CenterSection'
import RightSection from './RightSection'

export type CenterSectionName = 'goBack'
export type RightSectionName = 'signUp' | 'signOut' | 'close'

interface Props {
  backgroundColor: string
  logoColor: 'light' | 'dark'
  centerSection?: CenterSectionName
  rightSection?: RightSectionName
}

const Header: FC<Props> = ({
  backgroundColor,
  logoColor,
  centerSection,
  rightSection,
}) => (
  <Container background={backgroundColor}>
    <div>
      <img src={`/icons/logo-${logoColor}.svg`} />
    </div>

    <CenterSection sectionName={centerSection} />
    <RightSection sectionName={rightSection} />
  </Container>
)

const Container = styled.div<{ background: string }>`
  background: ${props => props.background};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  padding: 0 6rem;
  position: fixed;
  width: 100vw;
  height: ${HEADER_HEIGHT};
  z-index: 1;

  > div:first-child {
    text-align: left;

    > img {
      height: 3rem;
    }
  }
`

export default Header
