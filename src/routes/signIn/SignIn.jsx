import { Fragment } from "react"
import { signInWithGooglePopup } from "../../util/firebase/firbase"

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup()
    console.warn(response)
  }
  return (
    <Fragment>
      <h1>sign In Page</h1>
      <button onClick={logGoogleUser}>SignIn</button>
    </Fragment>
  )
}

export default SignIn
