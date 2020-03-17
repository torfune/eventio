import styled from 'styled-components'
import { COLOR } from '../constants'
import { FC } from 'react'

interface Props {
  label: string
  type: string
}

const Input: FC<Props> = ({ label, type }) => (
  <Container>
    <input type={type} name={label} placeholder={label} />
    <label data-content={label}>
      <span>{label}</span>
    </label>
  </Container>
)

const Container = styled.div`
  margin-bottom: 2rem;
  position: relative;

  > input {
    border: 0;
    border-bottom: 0.1rem solid #ddd;
    transition: 150ms;
    width: 100%;
    padding-top: 2rem;
    padding-bottom: 1rem;
  }

  > input:focus {
    border-color: ${COLOR.GREY};
  }

  > input::placeholder {
    font-size: 1.2rem;
    color: ${COLOR.GREY_LIGHT};
  }

  > input:not(:placeholder-shown) {
  }

  > input:not(:placeholder-shown) + label {
    transform: translateY(-10px);
    opacity: 0.7;
  }

  > label {
    position: absolute;
    left: 0;
    top: calc(50% - 0.8rem);
    opacity: 0;
    transition: 150ms;
    font-size: 1.2rem;
    color: ${COLOR.GREY_LIGHT};
  }
`

export default Input
