import { useState, useRef,useEffect } from 'react'
import Todo from './Todo'
import { useContext } from 'react'
// import { TodosContext } from './context/Todos'

const App = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [todos, setTodos] = useState<string []>([])
  const [input,setInput]=useState<string>("")

  //focusing on the input on rerender of page
  useEffect(()=>{
   if(inputRef.current !== null){
    inputRef.current.focus()
   }
  },[])

  //HandleAdd
  const handleAdd = () => {
    if (inputRef.current !== null) {
      // const todo: string = inputRef.current.value;
      const todo:string = input

      if(todo.trim() === "") return
            
      setTodos([...todos, todo]);
      inputRef.current.value=""
    }
    
  }

  //Handling button change
  const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
  const value=event.target.value
  setInput(value)
  }

  return (
    <main className='h-screen w-full flex-col bg-slate-200 flex items-center justify-center'>
      
      <p>Real change - {input}</p>

      <div className='min-h-[200px] bg-white w-[80%] rounded-md flex flex-col gap-5 items-center'>
        <h1 className='mt-5'>Todo List</h1>

        {/* Input field */}
        <div className='w-full flex items-center justify-center gap-5 h-[40px]'>
          <input type="text" placeholder='New todo' ref={inputRef}
           onChange={handleChange}
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
                  <>
                  <Todo key={i} text={t}/>
                  </>
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