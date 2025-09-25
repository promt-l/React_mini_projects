import {createContext,useContext} from "react"

export const ToDoContext = createContext({
    todos:[
        {
            id:1,
            todo:"Todo msg",
            completed:false
        }
    ],
    addToDo: (todo) => {},
    updateToDo: (id, todo) => {},
    deleteToDo: (id) => {},
    toogleComplete: (id) => {}

})

export const ToDoProvider = ToDoContext.Provider

export default function usetoDo(){
    return useContext(ToDoContext)
}