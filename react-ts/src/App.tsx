import React,{FC} from 'react'
import { useState, useRef } from 'react'

const App = () :FC => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [todos, setTodos] = useState<string []>([])

  //HandleAdd
  const handleAdd = () => {
    if (inputRef.current !== null) {
      const todo: string = inputRef.current.value;

      if(todo.trim() === "") return

      setTodos([...todos, todo]);
      inputRef.current.value=""
    }
    
  }


  return (
    <main className='h-screen w-full bg-slate-200 flex items-center justify-center'>
      <div className='min-h-[200px] bg-white w-[80%] rounded-md flex flex-col gap-5 items-center'>
        <h1>Todo List</h1>

        {/* Input field */}
        <div className='w-full flex items-center justify-center gap-5 h-[40px]'>
          <input type="text" placeholder='New todo' ref={inputRef}
            className='h-full w-[calc(100% - 100px)] border-[1px] pl-4 rounded-md ' />
          <button 
          onClick={handleAdd}
          className='h-[40px] w-[100px] bg-amber-500 text-white rounded-md'>
            Add
          </button>
        </div>

        {/* Rendering the todos */}
        <ul className='list-decimal'>
          {
            todos.length > 0 ?

              todos.map((t:string, i:number) => {
                return (
                  <li key={i}>{t}</li>
                )
              })


              : (
                <p>no todos</p>
              )
          }
        </ul>
      </div>
    </main >
  )
}

export default App