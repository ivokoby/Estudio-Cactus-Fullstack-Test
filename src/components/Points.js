import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import fingerprint from '../../public/fingerprint.png'
import flecha from '../../public/flecha.png'
import db from '../firebase/config'
import Materials from './Materials'
import ImageComponent from './ImageComponent'

const Points = () => {
  const [points, setPoints] = useState([])
  const [pointId, setPointId] = useState('')

  useEffect(() => {
    (async () => {
      const points = collection(db, 'points')

      const snapshot_points = await getDocs(points)

      const docs_points = snapshot_points.docs.map((doc) => {
        const data = doc.data()

        data.id = doc.id
        return data
      })

      setPoints(docs_points)
    })()
  }, [])

  return (
    <div>
      {pointId.length
        ? (
          <div>
            <div className='grid justify-items-end mr-20 m-1 '>
              <button onClick={() => setPointId('')} className=' relative justify-end p-4 back-btn'>
                <Image src={flecha} />
              </button>
              <Materials
                pointId={pointId}
              />
            </div>
          </div>
          )
        : (
          <div>
            {points.map((e) => (
              <div key={e.id}>
                <button className='point-btn' onClick={() => setPointId(e.id)}>
                  <Image src={fingerprint} />
                </button>
                <style jsx>{`
                    button {              
                        top: ${e.coordY}%;
                        left: ${e.coordX}%;   
                    }
                `}
                </style>
              </div>
            ))}
          </div>
          )}
      <ImageComponent />
    </div>
  )
}

export default Points
