import Head from 'next/head'
import Points from '../components/Points'

export default function Home () {
  return (
    <>
      <div>
        <Head>
          <title>Estudio Cactus Prueba Fullstack</title>
        </Head>
        <Points />
      </div>
    </>
  )
}
