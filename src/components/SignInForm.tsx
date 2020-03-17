import styled from 'styled-components'
import Input from './Input'
import Button from './Button'
import { useFormik } from 'formik'
import { useState } from 'react'
import { COLOR } from '../constants'

const SignInForm = () => {
  const [submitFailed, setSubmitFailed] = useState(false)
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: values => {
      const errors: { [key: string]: string } = {}

      if (!values.email) {
        errors.email = 'Email is required'
      }

      if (!values.password) {
        errors.password = 'Password is required'
      }

      return errors
    },
    onSubmit: values => {
      setSubmitFailed(true)
    },
  })

  const handleFocus = () => {
    setSubmitFailed(false)
  }

  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = formik

  return (
    <Container>
      <h1>Sign in to Eventio.</h1>

      {submitFailed ? (
        <h2 style={{ color: COLOR.RED }}>
          Oops! That email and password combination is not valid.
        </h2>
      ) : (
        <h2>Enter your details below.</h2>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <Input
          name="email"
          value={values.email}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          label="Email"
          type="email"
          validationMessage={touched.email ? errors.email : undefined}
          submitFailed={submitFailed}
        />
        <Input
          name="password"
          value={values.password}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          label="Password"
          type="password"
          validationMessage={touched.password ? errors.password : undefined}
          submitFailed={submitFailed}
        />

        <SubmitButton type="submit">SIGN IN</SubmitButton>
      </form>
    </Container>
  )
}

const Container = styled.div`
  width: 50rem;
`
const SubmitButton = styled(Button)`
  margin-top: 5rem;
`

export default SignInForm
