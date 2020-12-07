import { ADD_TODO } from '../actions/addTodo';
import { TOGGLE_TODO } from '../actions/toggleTodo';
import { DELETE_TODO } from '../actions/deleteTodo';

const todo = (state = [], { type, text, id }) => {
  switch (type) {
    case ADD_TODO:
      return [...state, { text, completed: false, id }];
    case TOGGLE_TODO:
      return state.map((t) => {
        return t.id !== id ? t : { ...t, completed: !t.completed };
      });
    case DELETE_TODO:
      return state.filter((t) => {
        return t.id !== id;
      });
    default:
      return state;
  }
};

export default todo;
