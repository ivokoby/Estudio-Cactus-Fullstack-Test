import { useSelector } from 'react-redux'

const ImageComponent = () => {
  const layers = useSelector(state => state.layers)

  return (
    <div>
      {
        layers.map((e) => (
          <img src={e} key={e} className='material-img h-full fixed -z-10' />
        ))
      }
    </div>
  )
}

export default ImageComponent
