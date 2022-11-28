import { useSelector } from "react-redux"

const ImageComponent = () => {
  const layers = useSelector(state => state.layers)
  console.log('chann', layers)

  return (
    <div>
      {
          layers
            ? (
                layers.map((e) => (
                  <img key={e} src={e} className='material-img' />
                ))
              )
            : (
              <>
              </>
              )
        }
    </div>
  )
}

export default ImageComponent
