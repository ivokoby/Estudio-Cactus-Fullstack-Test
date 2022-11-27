import Head from 'next/head'
import Materials from '../components/Materials'
import Points from '../components/Points'

export default function Home () {
  return (
    <>
      <div>
        <Head>
          <title>Estudio Cactus Prueba Fullstack</title>
        </Head>
        <Materials />
        <Points />
      </div>
    </>
  )
}
