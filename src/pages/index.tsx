import * as React from 'react';
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
  }
  return (
    <div className="container">
      <PageTitle title={'TODO-LIST'} color={'black'}></PageTitle>
      <div className="input-area">
        <Input name='email' type="text" placeholder="email" handleFunc={handleInputChange}/>
      </div>
      <div className="input-area">
        <Input name='password' type='password' placeholder="password" handleFunc={handleInputChange}/>
      </div>
      <Button text="signup" value={authValues} handleFunc={signUp}/>
      <style jsx>
          {`
            .container {
              text-align: center;
            }
            .input-area {
              margin-bottom: 20px;
            }
          `}
        </style>
    </div>
  )
}

export default Home