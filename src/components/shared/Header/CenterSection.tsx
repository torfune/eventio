import { CenterSectionName } from '.'
import { FC } from 'react'
import styled from 'styled-components'
import GoBackLink from './GoBackLink'

interface Props {
  sectionName?: CenterSectionName
}

const RightSection: FC<Props> = ({ sectionName }) => {
  const renderSection = (sectionName?: CenterSectionName) => {
    switch (sectionName) {
      case 'goBack':
        return <GoBackLink />

      default:
        return null
    }
  }

  return <Container>{renderSection(sectionName)}</Container>
}

const Container = styled.div`
  text-align: center;
`

export default RightSection
