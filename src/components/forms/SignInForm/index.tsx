import styled from 'styled-components'
import Input from '../../shared/Input'
import Button from '../../shared/Button'
import { useFormik } from 'formik'
import { COLOR, BP } from '../../../constants'
import { RootState } from '../../../store/rootReducer'
import { useSelector, useDispatch } from 'react-redux'
import { signIn, clearFailure } from '../../../store/auth/actions'
import validate from './validate'
import SignUpLink from '../../shared/Header/SignUpLink'

export type FormValues = typeof initialValues

const initialValues = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const dispatch = useDispatch()
  const auth = useSelector((state: RootState) => state.auth)
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: values => {
      dispatch(signIn(values.email, values.password))
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

        <StyledSignUpLink />

        <SubmitButton
          size="big"
          color="green"
          type="submit"
          loading={auth.loading || !!auth.user}
        >
          SIGN IN
        </SubmitButton>
      </form>
    </Container>
  )
}

const Container = styled.div`
  width: 50rem;

  @media (max-width: ${BP.MOBILE}) {
    width: 100%;
  }

  > form {
    margin-top: 4rem;
  }
`
const SubmitButton = styled(Button)`
  margin: 4rem 0;

  @media (max-width: ${BP.MOBILE}) {
    margin-left: auto;
    margin-right: auto;
  }
`
const StyledSignUpLink = styled(SignUpLink)`
  display: none;

  @media (max-width: ${BP.MOBILE}) {
    display: flex;
    justify-content: center;
    margin-top: 4rem;
  }
`

export default SignInForm
