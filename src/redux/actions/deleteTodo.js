export const DELETE_TODO = 'DELETE_TODO';

const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});

export default deleteTodo;
