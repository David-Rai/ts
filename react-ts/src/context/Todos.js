"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosProvider = exports.TodosContext = void 0;
const react_1 = require("react");
exports.TodosContext = (0, react_1.createContext)([]);
const TodosProvider = (Props) => {
    const todos = [];
    return value = { todos } >
        {
            children
        }
        < /TodosContext.provider>;
};
exports.TodosProvider = TodosProvider;
