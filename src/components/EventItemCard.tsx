import styled from 'styled-components'
import { FC } from 'react'
import EventItem from '../api/types/EventItem'

interface Props {
  eventItem: EventItem
}

const EventItemCard: FC<Props> = ({ eventItem }) => (
  <Container>{eventItem.title}</Container>
)

const Container = styled.div``

export default EventItemCard
