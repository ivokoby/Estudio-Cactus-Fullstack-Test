import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import huella from '../../public/huella.png'
import db from '../firebase/config'

const Points = () => {
    const [points, setPoints] = useState([])
    const [pointId, setPointId] = useState([])

    console.log('points', points)
    console.log(2,pointId)

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

    const handleChange = (e) => {
        console.log(e)
    }

    return (
            <div>
                { points.map((e) => (
                    <div key={e.id}>
                        <button onClick={handleChange(e.id)}>
                            <Image src={huella} />
                        </button>
                        <style jsx>{`
                            button {
                                position: absolute;
                                top: ${e.coordY}%;
                                left: ${e.coordX}%;
                                max-width: 50px;
                                border: 1px solid black;
                                border-radius: 70px;
                                margin: 0;
                                padding: 0;
                            }
                            button:hover {
                                background-color: #969696;
                            }
                        `}</style>
                    </div>
                ))}
            </div>
    )
}

export default Points