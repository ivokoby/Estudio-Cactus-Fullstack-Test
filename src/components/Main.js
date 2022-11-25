import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import db from '../firebase/config'

const Main = () => {
  const [data, setData] = useState([])
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

      const materialName = docs.map((e) => e.name)
      setMaterial(materialName)
      setData(docs)
      console.log(data)
      console.log(material)
    })()
  }, [])

  return (
    <div className=''>
      {material.map((e) => (
        <h1>{e}</h1>
      ))}
      <div>
        <h1>Pruebas</h1>
      </div>
    </div>
  )
}

export default Main
