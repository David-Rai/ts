import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import Repo from './Repo'

const App = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const listRef = useRef<HTMLInputElement | null>(null)
  const [avatar, setAvatar] = useState<string>("")
  const [repos, setRepos] = useState<any[]>([])


  //Getting random cat image at reload
  useEffect(() => {
    handleGet()
  }, [])

  //Fetching the data from the public apis
  const handleGet = async () => {
    const result = await axios.get(`https://api.thecatapi.com/v1/images/search`)
    setAvatar(result.data[0].url)
    console.log(result)

    const checked = listRef.current?.checked
    if (checked) {
      const res = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=10`)
      setRepos(res.data)
      console.log(res.data)
    } else {
      setRepos([]) // clear previous repos if unchecked
    }
  }

  //Handling the enter key down events on the input
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      console.log("enter pressed")
      return
    }
  }

  //Handling the checking the checkbox
  const handleCheck = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = listRef?.current?.checked
    if (checked) {
      const res = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=10`)
      setRepos(res.data)
      console.log(res.data)
    }
  }

  return (
    <main className='min-h-screen w-full bg-gray-900 text-white flex items-center justify-center p-4'>
      <div className='flex flex-col md:flex-row w-full max-w-6xl bg-gray-800 rounded-lg shadow-lg overflow-hidden'>

        {/* Left Section */}
        <div className='w-full md:w-1/2 flex items-center justify-center p-8 bg-white text-black'>
          <div className='w-full max-w-md flex flex-col gap-4'>
            {/* <input
              type="text"
              placeholder='Find GitHub user'
              className='border border-gray-400 pl-4 rounded-md h-12 focus:outline-none focus:ring-2 focus:ring-blue-500'
              ref={inputRef}
              onKeyDown={handleEnter}
            /> */}

            <label htmlFor="lists" className='flex items-center gap-2'>
              <input type="checkbox" id="repo" name='lists' ref={listRef} onChange={handleCheck} />
              <span>Include List</span>
            </label>

            <button
              className='bg-blue-600 hover:bg-blue-700 text-white h-12 rounded-md transition duration-300'
              onClick={handleGet}
            >
              Get Random Cat Image
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className='w-full md:w-1/2 p-6 overflow-y-auto flex flex-col items-center gap-6'>
          {avatar && (
            <img
              src={avatar}
              alt='GitHub Avatar'
              className='rounded-md w-40 h-40 '
            />
          )}

          {repos.length > 0 && (
            <div className='w-full flex flex-col gap-4'>
              {repos.map((list) => (
                <Repo key={list.id} url={list.url} />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

export default App
