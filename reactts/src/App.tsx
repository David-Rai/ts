import React, { useRef, useState } from 'react'
import axios from 'axios'

const App = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const repoRef = useRef<HTMLInputElement | null>(null)
  const [avatar, setAvatar] = useState<string>("")
  const [repos, setRepos] = useState<any[]>([])

  const handleGet = async () => {
    const username = inputRef.current?.value

    if (!username) return alert("Please enter a username")

    const result = await axios.get(`https://api.github.com/users/${username}`)
    setAvatar(result.data.avatar_url)

    const checked = repoRef.current?.checked
    if (checked) {
      const res = await axios.get(`https://api.github.com/users/${username}/repos`)
      setRepos(res.data)
    } else {
      setRepos([]) // clear previous repos if unchecked
    }
  }

  return (
    <main className='min-h-screen w-full bg-gray-900 text-white flex items-center justify-center p-4'>
      <div className='flex flex-col md:flex-row w-full max-w-6xl bg-gray-800 rounded-lg shadow-lg overflow-hidden'>

        {/* Left Section */}
        <div className='w-full md:w-1/2 flex items-center justify-center p-8 bg-white text-black'>
          <div className='w-full max-w-md flex flex-col gap-4'>
            <input
              type="text"
              placeholder='Find GitHub user'
              className='border border-gray-400 pl-4 rounded-md h-12 focus:outline-none focus:ring-2 focus:ring-blue-500'
              ref={inputRef}
            />

            <label htmlFor="repo" className='flex items-center gap-2'>
              <input type="checkbox" id="repo" name='repo' ref={repoRef} />
              <span>Include Repos</span>
            </label>

            <button
              className='bg-blue-600 hover:bg-blue-700 text-white h-12 rounded-md transition duration-300'
              onClick={handleGet}
            >
              Find
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className='w-full md:w-1/2 p-6 overflow-y-auto flex flex-col items-center gap-6'>
          {avatar && (
            <img
              src={avatar}
              alt='GitHub Avatar'
              className='rounded-full w-40 h-40 border-4 border-blue-500 shadow-lg'
            />
          )}

          {repos.length > 0 && (
            <div className='w-full flex flex-col gap-4'>
              {repos.map((repo, index) => (
                <div key={index} className='bg-gray-700 p-4 rounded-md shadow'>
                  <h2 className='text-xl font-semibold'>{repo.name}</h2>
                  <a
                    href={repo.svn_url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-400 underline hover:text-blue-300'
                  >
                    Visit Repo
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

export default App
