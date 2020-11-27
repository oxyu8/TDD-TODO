import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import {PageTitle} from '../components/PageTitle'
import { HelloButton } from '../components/HelloButton'


const Home = () => {
  return (
    <>
      <PageTitle title={'welcome to tokyo'} color={'red'}></PageTitle>
      <HelloButton text={'click me'} handleFunc = {() => console.log('hello')}></HelloButton>
    </>
  )
}

export default Home