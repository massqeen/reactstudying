import { nanoid } from 'nanoid';
import ADD_TODO from '../actions/ADD_TODO';

export const addTodo = (text) => ({ type: ADD_TODO, text, id: nanoid(12) });

export default addTodo;
