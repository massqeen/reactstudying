import { nanoid } from 'nanoid';
export const ADD_TODO = 'ADD_TODO';

export const addTodo = (text) => ({ type: ADD_TODO, text, id: nanoid(12) });

export default addTodo;
