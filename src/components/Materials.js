import { collection, getDocs, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import db from '../firebase/config'
import { getLayers } from '../redux/actions.js'
import Loader from './Loader'

const Materials = ({ pointId }) => {
  const [material, setMaterial] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      const q = query(collection(db, 'materials'), where('points', '==', [pointId]))
      const querySnapshot = await getDocs(q)

      const docsMaterials = querySnapshot.docs.map((doc) => {
        const data = doc.data()

        data.id = doc.id
        return data
      })

      setMaterial(docsMaterials)
    })()
  }, [])

  const handleChangeImage = (e) => {
    dispatch(getLayers(e))
  }
  //
  return (
    <>
      {material.length
        ? (
          <div>
            <div className='grid justify-items-end responsive'>
              {
                  material.map((e) => (
                    <>
                      <button key={e.id} className='hover:bg-white hover:rounded-lg btn-material' onClick={() => handleChangeImage(e.layers[e.points])}>
                        <div className='flex justify-end p-4 md:w-36 lg:w-48'>
                          <p className='pt-7 pr-3 text-sm material-name '>{e.name}</p>
                          <div>
                            <img className='w-20 h-20 border-2 border-zinc-500 rounded-lg' src={e.materialPreview} alt='A' />
                          </div>
                        </div>
                      </button>
                    </>
                  ))
                  }
            </div>
          </div>
          )
        : (
          <Loader />
          )}
    </>
  )
}

export default Materials
