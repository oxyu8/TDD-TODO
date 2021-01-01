import * as React from 'react';
import { useState } from 'react';
import {PageTitle} from '../components/PageTitle'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import Link from 'next/link'

const Home: React.FC = () => {
  // const dispatch = useDispatch();
  const [authValues, setAuthValues] = useState({
    email: '',
    password: '',
  })

  const signUp = () => {
    console.log("test")
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
      <Button text="signup" value={authValues} handleFunc={signUp}/>
      <div>
        <Link href="/signIn">
          <a>already sign up ?</a>
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

export default Home