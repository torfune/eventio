import { FormValues } from '.'
import validateDate from '../../utils/validateDate'
import validateTime from '../../utils/validateTime'
import createDate from '../../utils/createDate'

const validate = (values: FormValues) => {
  const errors: Partial<FormValues> = {}

  if (!values.title) {
    errors.title = 'Title has to be filled up'
  }

  if (!values.description) {
    errors.description = 'Description has to be filled up'
  }

  if (!values.date) {
    errors.date = 'Date has to be filled up'
  } else if (!validateDate(values.date)) {
    errors.date = 'Required date format: YYYY-MM-DD'
  }

  if (!values.time) {
    errors.time = 'Time has to be filled up'
  } else if (!validateTime(values.time)) {
    errors.time = 'Required time format: HH:MM'
  }

  if (!values.capacity) {
    errors.capacity = 'Capacity has to be a number'
  }

  if (!errors.date && !errors.time) {
    const date = createDate(values.date, values.time)
    if (date < new Date()) {
      errors.date = 'Event date must be in the future'
      errors.time = 'Event time must be in the future'
    }
  }

  return errors
}

export default validate
