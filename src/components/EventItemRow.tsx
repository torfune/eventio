import styled from 'styled-components'
import { FC } from 'react'
import EventItem from '../api/types/EventItem'
import { COLOR, CARD_SHADOW, BP } from '../constants'
import EventItemButton from './EventItemButton'
import formatDate from '../utils/formatDate'

interface Props {
  eventItem: EventItem
}

const EventItemRow: FC<Props> = ({ eventItem }) => (
  <Container>
    <Title>{eventItem.title}</Title>
    <Description>{eventItem.description}</Description>
    <Owner>{`${eventItem.owner.firstName} ${eventItem.owner.lastName}`}</Owner>
    <StartDate>{formatDate(eventItem.startsAt)}</StartDate>
    <Capacity>{`${eventItem.attendees.length} of ${eventItem.capacity}`}</Capacity>

    <EventItemButton eventItem={eventItem} />
  </Container>
)

const Container = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  margin-bottom: 1.5rem;
  box-shadow: ${CARD_SHADOW};
  padding: 2rem 3rem;
  border-radius: 0.2rem;

  @media (max-width: ${BP.TABLET}) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media (max-width: ${BP.MOBILE}) {
    display: grid;
    grid-template-columns: 1fr 12rem;
  }

  > p {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    padding-right: 3rem;
    margin-left: auto;

    :first-child {
      margin-left: 0;
    }

    @media (max-width: ${BP.TABLET}) {
      padding-right: 1.5rem;
    }

    @media (max-width: ${BP.MOBILE}) {
      padding-right: 0;
      margin-left: 0;
    }
  }

  > button {
    margin-left: auto;

    @media (max-width: ${BP.MOBILE}) {
      grid-column: 2;
    }
  }
`
const Title = styled.p`
  width: 26rem;
  font-size: 1.8rem;
  font-weight: 500;

  @media (max-width: ${BP.TABLET}) {
    width: 16rem;
  }

  @media (max-width: ${BP.MOBILE}) {
    width: 100%;
    grid-column: 1 / span 2;
  }
`
const Description = styled.p`
  width: 30rem;
  color: ${COLOR.GREY_TEXT_LIGHT};

  @media (max-width: ${BP.TABLET}) {
    width: 12rem;
  }

  @media (max-width: ${BP.MOBILE}) {
    width: 100%;
    grid-column: 1 / span 2;
  }
`
const Owner = styled.p`
  width: 15rem;
  color: ${COLOR.GREY_TEXT_DARK};
  opacity: 0.9;
  font-size: 1.5rem;

  @media (max-width: ${BP.MOBILE}) {
    display: none;
  }
`
const StartDate = styled.p`
  width: 20rem;
  color: ${COLOR.GREY_TEXT_LIGHT};
  opacity: 0.6;

  @media (max-width: ${BP.MOBILE}) {
    width: 100%;
    grid-column: 1;
    margin-top: 1.5rem;
  }
`
const Capacity = styled.p`
  width: 9rem;
  color: ${COLOR.GREY_TEXT_LIGHT};

  @media (max-width: ${BP.MOBILE}) {
    grid-column: 1;
  }
`

export default EventItemRow
