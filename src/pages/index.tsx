import { useState } from 'react'
import {PageTitle} from '../components/PageTitle'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import firebase from '../../firebaseConfig'


const Home = () => {
  const [authValues, setAuthValues] = useState({
    email: '',
    password: '',
  })

  const signUp = () => {
    console.log(authValues.email)
    console.log(authValues.password)
    firebase.auth().createUserWithEmailAndPassword(authValues.email, authValues.password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    })
    .then((result) => {
      console.log(result)
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const name = e.target.name
    setAuthValues({
      ...authValues,
      [name]: value
    })
    console.log(authValues)
  }

  const confirm = () => {
    console.log(authValues.email)
    console.log(authValues.password)
  }

  return (
    <>
      <PageTitle title={'welcome to tokyo'} color={'red'}></PageTitle>
      <Input name='email' type="text" handleFunc={handleInputChange}/>
      <Input name='password' type='password' handleFunc={handleInputChange}/>
      <Button text="confirm" handleFunc = {confirm}/>
      <Button text="signup" handleFunc = {signUp}/>
    </>
  )
}

export default Home