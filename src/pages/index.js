import 'firebase/firestore';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import db from '../firebase/config';

export default function Home () {
  const [material, setMaterial] = useState([])

  useEffect(() => {
    (async () => {
      const colRef = collection(db, 'materials')

      const snapshot = await getDocs(colRef)

      const docs = snapshot.docs.map((doc) => {
        const data = doc.data()

        data.id = doc.id

        return data
      })
      setMaterial(docs)
      console.log(docs)
    })()
  }, [])

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <p>ola</p>
      ESTUDIO CACTUS VISUALIZER TEST
    </div>
  )
}
