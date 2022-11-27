import { collection, getDocs, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import db from '../firebase/config'

const Main = () => {
  const [material, setMaterial] = useState([])
  
  useEffect(() => {
    (async () => {
      const materials = collection(db, 'materials')

      const q = query(collection(db, "materials"), where("points", "==", ['EnRd7hAaNydVdVJ06qgF']));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
      //console.log(doc.id, " => ", doc.data());
      });

      const snapshot_materials = await getDocs(materials)

      const docs_materials = snapshot_materials.docs.map((doc) => {
        const data = doc.data()

        data.id = doc.id
        return data
      })

      setMaterial(docs_materials)
      
    })()
  }, [])

  
  
  const obj = material
  const array = []
  for (let i=0; i<obj.length; i++){
    const prueba = {
      name: obj[i].name,
      material: obj[i].materialPreview,
      layers: obj[i].layers,
      points: obj[i].points
    }
    array.push(prueba)
  }
  console.log('materials',array)
  return (
    <div>
    {
    <div className='grid justify-items-end mr-20 m-1'>
      {
      material.map((e) => (
        <button key={e.id} className='hover:bg-neutral-500'>
          <div className='flex justify-end p-4'> 
            <p className='pt-3'>{e.name}</p>
            <div>
              <img className='m-1 w-10 h-10' src={e.materialPreview} alt='A'/>
            </div>
          </div>
        </button>
      ))
      }
    </div>
    }
    </div>
  )
}

export default Main
