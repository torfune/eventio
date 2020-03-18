import styled from 'styled-components'
import { FC } from 'react'
import EventItem from '../api/types/EventItem'
import { COLOR, CARD_SHADOW } from '../constants'
import Button from './Button'
import { useSelector } from 'react-redux'
import { RootState } from '../store/rootReducer'
import getEventButtonConfig from '../utils/getEventButtonColor'

interface Props {
  eventItem: EventItem
}

const EventItemRow: FC<Props> = ({ eventItem }) => {
  const user = useSelector((state: RootState) => state.auth.user)
  const buttonConfig = getEventButtonConfig(eventItem, user!.id)

  return (
    <Container>
      <Title>{eventItem.title}</Title>
      <Description>{eventItem.description}</Description>
      <Owner>{`${eventItem.owner.firstName} ${eventItem.owner.lastName}`}</Owner>
      <StartDate>
        {new Date(eventItem.startsAt).toLocaleString('en-US')}
      </StartDate>
      <Capacity>{`${eventItem.attendees.length} of ${eventItem.capacity}`}</Capacity>

      <StyledButton size="small" color={buttonConfig.color}>
        {buttonConfig.text}
      </StyledButton>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  margin-bottom: 1.5rem;
  box-shadow: ${CARD_SHADOW};
  padding: 2rem 3rem;
  border-radius: 0.2rem;

  > p {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    padding-right: 3rem;
    margin-left: auto;

    :first-child {
      margin-left: 0;
    }
  }
`
const Title = styled.p`
  width: 26rem;
  font-size: 1.8rem;
  font-weight: 500;
`
const Description = styled.p`
  width: 30rem;
  color: ${COLOR.GREY_TEXT_LIGHT};
`
const Owner = styled.p`
  width: 15rem;
  color: ${COLOR.GREY_TEXT_DARK};
  opacity: 0.9;
  font-size: 1.5rem;
`
const StartDate = styled.p`
  width: 20rem;
  color: ${COLOR.GREY_TEXT_LIGHT};
  opacity: 0.6;
`
const Capacity = styled.p`
  width: 9rem;
  color: ${COLOR.GREY_TEXT_LIGHT};
`
const StyledButton = styled(Button)`
  margin-left: auto;
`

export default EventItemRow
