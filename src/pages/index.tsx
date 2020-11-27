import {PageTitle} from '../components/PageTitle'
import { HelloButton } from '../components/HelloButton'
import { db } from '../../firebaseConfig'


const Home = () => {
  const addTodo = async() => {
    db.collection('todo').doc('test').set({
      name: 'test'
    })
    .then(() => {
      console.log('success')
    })
    .catch((error) => {
      console.log(error)
      console.error('error', error)
    })

  }
  return (
    <>
      <PageTitle title={'welcome to tokyo'} color={'red'}></PageTitle>
      <HelloButton text={'click me'} handleFunc = {addTodo}></HelloButton>
    </>
  )
}

export default Home