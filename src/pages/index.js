import { TaskContext } from '../context/taskContext'
import { useContext } from 'react'

export default function Home () {
  const {} = useContext(TaskContext)
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      ESTUDIO CACTUS VISUALIZER TEST
    </div>
  )
}
