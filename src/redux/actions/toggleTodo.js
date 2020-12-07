export const TOGGLE_TODO = 'TOGGLE_TODO';

const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

export default toggleTodo;
