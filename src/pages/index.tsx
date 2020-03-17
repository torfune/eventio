import Header from '../components/Header'
import SignUpMessage from '../components/SignUpMessage'

export default () => (
  <>
    <Header
      backgroundColor="#ddd"
      logoColor="#222"
      rightComponent={<SignUpMessage />}
    />

    <div>Homepage</div>
  </>
)
