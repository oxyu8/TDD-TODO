import * as React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import firebase from '../../firebaseConfig'
import { PageTitle } from '../components/PageTitle'
import { Button } from '../components/Button'
import { Input } from '../components/Input'

const SignIn = () => {
    const [authValues, setAuthValues] = useState({
        email: '',
        password: '',
    })

    const signIn = () => {
        firebase.auth().signInWithEmailAndPassword(authValues.email, authValues.password)
        .then((user) => {
            console.log(user)
            alert('success')
        })
        .catch( (error) => {
            const errorCode = error.code
            const errorMessage = error.message
            console.log(errorCode, errorMessage)
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
            <Input name='email' type="text" placeholder="email" value={authValues.email} handleFunc={handleInputChange}/>
            </div>
            <div className="input-area">
            <Input name='password' type='password' placeholder="password" value={authValues.password} handleFunc={handleInputChange}/>
            </div>
            <Button text="signup" value={authValues} handleFunc={signIn}/>
            <div>
                <Link href="/">
                    <a>create a new account</a>
                </Link>
            </div>
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

export default SignIn