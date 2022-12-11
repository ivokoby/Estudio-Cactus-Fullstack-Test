import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import fingerprint from '../../public/fingerprint.png'
import back from '../../public/back.png'
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
            <div className='grid justify-items-end prueba'>
              <button onClick={() => setPointId('')} className='relative justify-end p-4 back-btn w-20 m-4 mr-6 hover:bg-zinc-400 hover:rounded-xl'>
                <Image src={back} />
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
                <button className='fixed w-12 hover:opacity-50' style={{ top: `${e.coordY}%`, left: `${e.coordX}%` }} onClick={() => setPointId(e.id)}>
                  <Image src={fingerprint} />
                </button>
              </div>
            ))}
          </div>
          )}

    </div>
  )
}

export default Points
