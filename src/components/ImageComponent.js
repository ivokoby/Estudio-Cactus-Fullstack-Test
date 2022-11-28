import { useSelector } from 'react-redux'

const ImageComponent = () => {
  const layers = useSelector(state => state.layers)

  return (
    <div>
      {
        layers.map((e) => (
          <img src={e} className='material-img' />
        ))
      }
    </div>
  )
}

export default ImageComponent
