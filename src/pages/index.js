import Head from 'next/head'
import Points from '../components/Points'
import { Provider } from 'react-redux'
import store from '../redux/store'

export default function Home () {
  return (
    <>
      <div>
        <Provider store={store}>
          <Head>
            <title>Estudio Cactus Prueba Fullstack</title>
          </Head>
          <Points />
        </Provider>
      </div>
    </>
  )
}
