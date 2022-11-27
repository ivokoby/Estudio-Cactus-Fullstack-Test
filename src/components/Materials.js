import { collection, getDocs, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import db from '../firebase/config'
import ImageComponent from './ImageComponent'

const Materials = ({ pointId }) => {
  const [material, setMaterial] = useState([])
  const [image, setImage] = useState([])
  console.log('a', material)

  useEffect(() => {
    (async () => {
      const q = query(collection(db, 'materials'), where('points', '==', [pointId]))
      const querySnapshot = await getDocs(q)

      const docs_materials = querySnapshot.docs.map((doc) => {
        const data = doc.data()

        data.id = doc.id
        return data
      })

      setMaterial(docs_materials)
    })()
  }, [])

  const handleChangeImage = (e) => {
    setImage([image, e])
  }
  //
  return (
    <>
      {pointId
        ? (
          <div>
            <div className='grid justify-items-end'>
              {
                  material.map((e) => (
                    <>
                      <button key={e.id} className='hover:bg-white hover:rounded-lg' onClick={() => handleChangeImage(e.layers[e.points])}>
                        <div className='flex justify-end p-4'>
                          <p className='pt-7 pr-4 text-sm'>{e.name}</p>
                          <div>
                            <img className='w-20 h-20 border-2 border-white rounded-lg' src={e.materialPreview} alt='A' />
                          </div>
                        </div>
                      </button>
                    </>
                  ))
                  }
            </div>
            <ImageComponent image={image} />
          </div>
          )
        : (
          <ImageComponent image={image} />
          )}
    </>
  )
}

export default Materials
