import '../styles/globals.css'
import '../firebase/config'
import 'tailwindcss/tailwind.css'

function MyApp ({ Component, pageProps }) {
  return (
    <div className='custom-img'>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
