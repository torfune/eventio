import Button from './shared/Button'
import { FC, useState } from 'react'
import getEventButtonConfig from '../utils/getEventButtonConfig'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store/rootReducer'
import { leaveEvent, joinEvent } from '../store/events/actions'
import EventItem from '../api/types/EventItem'

interface Props {
  eventItem: EventItem
}

const EventItemButton: FC<Props> = ({ eventItem }) => {
  const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.auth.user)
  const [loading, setLoading] = useState(false)

  if (!user) return null

  const { text, color, action } = getEventButtonConfig(eventItem, user.id)

  const handleButtonClick = async () => {
    if (loading) return

    setLoading(true)

    switch (action) {
      case 'leave':
        await dispatch(leaveEvent(eventItem.id))
        break

      case 'join':
        await dispatch(joinEvent(eventItem.id))
        break
    }

    setLoading(false)
  }

  return (
    <Button
      size="small"
      color={color}
      loading={loading}
      onClick={handleButtonClick}
    >
      {text}
    </Button>
  )
}

export default EventItemButton
