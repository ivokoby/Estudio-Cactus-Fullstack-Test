import Points from '../components/Points'
import { Provider } from 'react-redux'
import store from '../redux/store'

export default function Home () {
  return (
    <>
      <div>
        <Provider store={store}>
          <Points />
        </Provider>
      </div>
    </>
  )
}
