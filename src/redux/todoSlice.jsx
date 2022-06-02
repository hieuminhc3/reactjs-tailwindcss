import {createSlice} from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

export const todoSlice = createSlice({
    name: 'todos',
    initialState: [
        
    ],
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: uuidv4(),
                name: action.payload.name,
                completed: false,
            };
            state.push(todo);
        },
        removeTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload)
        }
    }
})

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;