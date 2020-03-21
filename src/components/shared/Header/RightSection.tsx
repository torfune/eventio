import { RightSectionName } from '.'
import { FC } from 'react'
import SignUpLink from './SignUpLink'
import SignOutLink from './SignOutLink'
import styled from 'styled-components'
import CloseLink from './CloseLink'

interface Props {
  sectionName?: RightSectionName
}

const RightSection: FC<Props> = ({ sectionName }) => {
  const renderSection = (sectionName?: RightSectionName) => {
    switch (sectionName) {
      case 'signUp':
        return <SignUpLink />

      case 'signOut':
        return <SignOutLink />

      case 'close':
        return <CloseLink />

      default:
        return null
    }
  }

  return <Container>{renderSection(sectionName)}</Container>
}

const Container = styled.div`
  text-align: right;
`

export default RightSection
