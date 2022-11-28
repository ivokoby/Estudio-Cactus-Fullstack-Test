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

      const snapshotPoints = await getDocs(points)

      const docsPoints = snapshotPoints.docs.map((doc) => {
        const data = doc.data()

        data.id = doc.id
        return data
      })

      setPoints(docsPoints)
    })()
  }, [])

  return (
    <div>
      <ImageComponent />
      {pointId.length
        ? (
          <div>
            <div className='grid justify-items-end'>
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
              <div key={e.id} className=''>
                <button className='point-btn' onClick={() => setPointId(e.id)}>
                  <Image src={fingerprint} />
                </button>
                <style jsx>{`
                    button {              
                        left: ${e.coordX}%;  
                        top: ${e.coordY}%;
                    }
                `}
                </style>
              </div>
            ))}
          </div>
          )}

    </div>
  )
}

export default Points
