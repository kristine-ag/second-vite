import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Post from "./components/Post"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <Post />
      <div className='flex items-center gap-3 mt-3'>
      {Array.from({length:5}).map((value, index) => {
        return(
          <div className='p-4 border font-bold hover:cursor-pointer'>
            {index + 1}
          </div>
        )
      })}

      </div>
    </div>
  )
}

export default App
