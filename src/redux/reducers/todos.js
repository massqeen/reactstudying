import ADD_TODO from '../actions/ADD_TODO';
import TOGGLE_TODO from '../actions/TOGGLE_TODO';

const todos = (state = [], { type, text, id }) => {
  switch (type) {
    case ADD_TODO:
      return [...state, { text, completed: false, id }];
    case TOGGLE_TODO:
      return state.map((todo) => {
        return todo.id !== id ? todo : { ...todo, completed: !todo.completed };
      });
    default:
      return state;
  }
};

export default todos;
