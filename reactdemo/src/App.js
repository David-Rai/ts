"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const App = () => {
    const [count, setCount] = (0, react_2.useState)(0);
    //increment
    const incre = () => {
        setCount(prev => prev + 1);
    };
    //decrement
    const decre = () => {
        setCount(prev => prev - 1);
    };
    return (<main>
      <p>{count}</p>
      <button onClick={incre}>increment</button>
      <button onClick={decre}>decrement</button>
    </main>);
};
exports.default = App;
