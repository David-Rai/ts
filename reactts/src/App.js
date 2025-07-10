"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const App = () => {
    return (<div className='h-screen w-full bg-gray-900  text-white flex items-center  justify-center'>
      <h1 className='text-5xl hover:text-gray-200 cursor-pointer transition-all duration-5'>React App with Typescript</h1>
      </div>);
};
exports.default = App;
