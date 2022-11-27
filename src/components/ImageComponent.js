const ImageComponent = ({ image }) => {
  return (
    <div>
      {
          image
            ? (
                image.map((e) => (
                  <img src={e} className='material-img' />
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
