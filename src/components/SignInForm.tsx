import styled from 'styled-components'
import Input from './Input'
import Button from './Button'
import { useFormik } from 'formik'
import { COLOR } from '../constants'
import { RootState } from '../store/rootReducer'
import { useSelector, useDispatch } from 'react-redux'
import { signOut, signIn, clearFailure } from '../store/auth/actions'

const SignInForm = () => {
  const dispatch = useDispatch()
  const auth = useSelector((state: RootState) => state.auth)
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
      if (auth.user) {
        dispatch(signOut())
      } else {
        dispatch(signIn(values.email, values.password))
      }
    },
  })

  const handleFocus = () => {
    if (auth.failed) {
      dispatch(clearFailure())
    }
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

      {auth.failed ? (
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
          submitFailed={auth.failed}
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
          submitFailed={auth.failed}
        />

        <SubmitButton type="submit" loading={auth.loading}>
          SIGN IN
        </SubmitButton>
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
