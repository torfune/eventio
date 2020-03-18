import styled from 'styled-components'
import { FC } from 'react'
import EventItem from '../api/types/EventItem'
import { CARD_SHADOW, COLOR } from '../constants'
import Button from './Button'
import getEventButtonConfig from '../utils/getEventButtonColor'
import { useSelector } from 'react-redux'
import { RootState } from '../store/rootReducer'

interface Props {
  eventItem: EventItem
}

const EventItemCard: FC<Props> = ({ eventItem }) => {
  const user = useSelector((state: RootState) => state.auth.user)
  const buttonConfig = getEventButtonConfig(
    eventItem,
    user ? user.id : '5e6f7eabb6a291001f89b12f'
  ) // TODO: remove placeholder

  return (
    <Container>
      <StartDate>
        {new Date(eventItem.startsAt).toLocaleString('en-US')}
      </StartDate>
      <Title>{eventItem.title}</Title>
      <Owner>{`${eventItem.owner.firstName} ${eventItem.owner.lastName}`}</Owner>
      <Description>{eventItem.description}</Description>

      <BottomRow>
        <Capacity>
          <img src="/icons/user.svg" />{' '}
          <p>{`${eventItem.attendees.length} of ${eventItem.capacity}`}</p>
        </Capacity>
        <Button size="small" color={buttonConfig.color}>
          {buttonConfig.text}
        </Button>
      </BottomRow>
    </Container>
  )
}

const Container = styled.div`
  background: #fff;
  padding: 3rem;
  width: 45rem;
  margin-bottom: 2rem;
  margin-right: 2rem;
  box-shadow: ${CARD_SHADOW};
  display: flex;
  flex-direction: column;
`
const Title = styled.p`
  font-size: 2.4rem;
  line-height: 2.4rem;
  font-weight: 500;
  margin-top: 2rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`
const Description = styled.p`
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: ${COLOR.GREY_TEXT_LIGHT};
`
const Owner = styled.p`
  color: ${COLOR.GREY_TEXT_DARK};
  opacity: 0.9;
  font-size: 1.5rem;
`
const StartDate = styled.p`
  color: ${COLOR.GREY_TEXT_LIGHT};
  opacity: 0.6;
`
const Capacity = styled.div`
  display: flex;
  align-items: center;

  > img {
    height: 1.6rem;
  }

  > p {
    margin-left: 1rem;
    color: ${COLOR.GREY_TEXT_LIGHT};
  }
`
const BottomRow = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
`

export default EventItemCard
