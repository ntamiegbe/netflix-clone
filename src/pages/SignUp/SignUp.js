import { useRef } from 'react'
import './signUp.css'
import { auth } from '../../server/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


const SignUp = () => {

  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const register = (event) => {
    event.preventDefault()

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser);
    }).catch((error) => {
      console.log(error.message)
    })
  }

  const signIn = (event) => {
    event.preventDefault()

    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser);
    }).catch((error) => {
      console.log(error.message)
    })
  }

  return (
    <div className='signup'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder='Email' />
        <input ref={passwordRef} type="password" placeholder='Password' />
        <button type='submit' onClick={signIn}>Sign In</button>

        <h4>Don't have an acount? <span onClick={register}> Sign Up</span></h4>
      </form>
    </div>
  )
}

export default SignUp