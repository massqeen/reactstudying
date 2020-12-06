import TOGGLE_TODO from '../actions/TOGGLE_TODO';

const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

export default toggleTodo;
