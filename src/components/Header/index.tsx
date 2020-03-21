import styled from 'styled-components'
import { FC } from 'react'
import { HEADER_HEIGHT, BP } from '../../constants'
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
    <div className="tablet-hide">
      <img src={`/icons/logo-${logoColor}.svg`} />
    </div>
    <div className="tablet-show">
      <img src={`/icons/logo-dark.svg`} />
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

  @media (max-width: ${BP.TABLET}) {
    padding: 0 3rem;
  }

  @media (max-width: ${BP.MOBILE}) {
    padding: 0 2rem;
  }

  > div:first-child {
    text-align: left;

    > img {
      height: 3rem;
    }
  }

  .tablet-show {
    display: none;

    @media (max-width: ${BP.TABLET}) {
      display: block;
    }
  }

  .tablet-hide {
    display: block;

    @media (max-width: ${BP.TABLET}) {
      display: none;
    }
  }
`

export default Header
