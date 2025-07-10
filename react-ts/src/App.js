"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Todo_1 = __importDefault(require("./Todo"));
// import { TodosContext } from './context/Todos'
const App = () => {
    const inputRef = (0, react_1.useRef)(null);
    const [todos, setTodos] = (0, react_1.useState)([]);
    const [input, setInput] = (0, react_1.useState)("");
    //focusing on the input on rerender of page
    (0, react_1.useEffect)(() => {
        if (inputRef.current !== null) {
            inputRef.current.focus();
        }
    }, []);
    //HandleAdd
    const handleAdd = () => {
        if (inputRef.current !== null) {
            // const todo: string = inputRef.current.value;
            const todo = input;
            if (todo.trim() === "")
                return;
            setTodos([...todos, todo]);
            inputRef.current.value = "";
        }
    };
    //Handling button change
    const handleChange = (event) => {
        const value = event.target.value;
        setInput(value);
    };
    return (<main className='h-screen w-full flex-col bg-slate-200 flex items-center justify-center'>
      
      <p>Real change - {input}</p>

      <div className='min-h-[200px] bg-white w-[80%] rounded-md flex flex-col gap-5 items-center'>
        <h1 className='mt-5'>Todo List</h1>

        {/* Input field */}
        <div className='w-full flex items-center justify-center gap-5 h-[40px]'>
          <input type="text" placeholder='New todo' ref={inputRef} onChange={handleChange} className='h-full w-[calc(100% - 100px)] border-[1px] pl-4 rounded-md '/>
          <button onClick={handleAdd} className='h-[40px] w-[100px] bg-amber-500 text-white rounded-md'>
            Add
          </button>
        </div>

        {/* Rendering the todos */}
        <ul className='list-decimal'>
          {todos.length > 0 ?
            todos.map((t, i) => {
                return (<>
                  <Todo_1.default key={i} text={t}/>
                  </>);
            })
            : (<p>no todos</p>)}
        </ul>
      </div>
    </main>);
};
exports.default = App;
