import styled from 'styled-components'
import { COLOR } from '../constants'
import { FC, InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  submitFailed?: boolean
  validationMessage?: string
}

const Input: FC<Props> = ({
  name,
  label,
  submitFailed,
  validationMessage,
  ...inputProps
}) => (
  <Container redBorder={submitFailed || !!validationMessage}>
    <input id={name} name={name} placeholder={label} {...inputProps} />
    <label htmlFor={name} data-content={label}>
      <span>{label}</span>
    </label>

    <ValidationMessage>{validationMessage}</ValidationMessage>
  </Container>
)

const Container = styled.div<{ redBorder?: boolean }>`
  margin-bottom: 1rem;
  position: relative;

  > input {
    border: 0;
    border-bottom: 0.1rem solid #ddd;
    transition: 150ms;
    width: 100%;
    padding-top: 2rem;
    padding-bottom: 1rem;
    border-color: ${props => props.redBorder && COLOR.RED};
  }

  > input:focus {
    border-color: ${COLOR.GREY};
  }

  > input::placeholder {
    font-size: 1.2rem;
    color: ${COLOR.GREY_LIGHT};
  }

  > input:not(:placeholder-shown) + label {
    transform: translateY(-2rem);
    opacity: 0.7;
  }

  > label {
    position: absolute;
    left: 0;
    bottom: 1rem;
    opacity: 0;
    transition: 150ms;
    font-size: 1.2rem;
    color: ${COLOR.GREY_LIGHT};
  }
`
const ValidationMessage = styled.p`
  color: ${COLOR.RED};
  margin-top: 0.8rem;
  font-size: 1rem;
`

export default Input
