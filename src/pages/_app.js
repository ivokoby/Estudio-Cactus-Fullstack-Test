import '../styles/globals.css'
import '../firebase/config'
import 'tailwindcss/tailwind.css'
import Head from 'next/head'

function MyApp ({ Component, pageProps }) {
  return (
    <div className='custom-img'>
      <Head>
        <title>Estudio Cactus Prueba Fullstack</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0' />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
