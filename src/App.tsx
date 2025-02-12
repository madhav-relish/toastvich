import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useToast from './hooks/useToast'

function App() {
  const [count, setCount] = useState(0)
  const {toast} = useToast({message:"Hello, This is a test message"})

  return (
    <>
      <div className=''>
        <button onClick={()=>console.log("TOAST::", toast)}>Success</button>
        <button>Failure</button>
        <button>Info</button>
        <button>Default</button>
        <button>Custom</button>
      </div>
    </>
  )
}

export default App
