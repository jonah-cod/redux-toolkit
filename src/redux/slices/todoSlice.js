import { createSlice, } from "@reduxjs/toolkit";
import { todoList } from "../../data";



const todosSlice = createSlice({
      name: 'todos',
      initialState: todoList(),
      reducers: {
            addTodo: (state, action)=>{
                  state.push(action.payload)
            },
            deleteTodo: (state, action)=>{
                  return state = state.filter(todo=>todo.id != action.payload)
            },
            updateTodo: (state, action)=>{
                  let taskindex = state.findIndex((todo)=>todo.id===action.payload);
                  if (taskindex>=0) {
                        state[taskindex].status = "Completed"
                  }
            }
      }
})


export const { addTodo, deleteTodo, updateTodo }  =  todosSlice.actions

export default todosSlice.reducer