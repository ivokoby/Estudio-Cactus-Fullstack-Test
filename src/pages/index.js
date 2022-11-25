import Head from 'next/head'
import Main from '../components/Main'

export default function Home () {
  return (
    <>
      <div>
        <Head>
          <title>Estudio Cactus Prueba Fullstack</title>
        </Head>
        <Main />
        <h1 className='font-bold underline'>Hola</h1>

      </div>
    </>
  )
}
