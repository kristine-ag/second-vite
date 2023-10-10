import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Post from "./components/Post"
import useFetch from './hooks/useFetch'

function App() {
  const [number, setNumber] = useState(1)
  // const [post, setPost] = useState("")
  // const [count, setCount] = useState(0)

  // const fetchPost = async (number) => {
  //   try {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + number)
  //     const data = await response.json()

  //     setPost(data)

  //   } catch (error){
  //     console.log(error)

  //   } finally {
  //     console.log('Done')
  //   }

    
  // }

  const {data} = useFetch ('https://jsonplaceholder.typicode.com/posts/', number)

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts/' + number)
  //   .then((response) => response.json())
  //   .then((data) => setPost(data))
  //   .catch((error) => console.log(error))

  //   fetchPost(number)

  // }, [number] )

  useEffect(() => {
    console.log('Mounted')

    return() => {
      console.log('Remove')
    }
  }, [])
  

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
      { data && <Post title={data.title} body={data.body}/> }
      {number}
      <div className='flex items-center gap-3 mt-3'>
      {Array.from({length:5}).map((value, index) => {
        return(
          <div key={`paguination-${index+1}`}className='p-4 border font-bold hover:cursor-pointer' onClick={() => setNumber(index + 1)}>
            {index + 1}
          </div>
        )
      })}

      </div>
    </div>
  )
}

export default App
