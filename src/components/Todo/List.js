import { func, arrayOf, shape, string } from 'prop-types';
import Todo from './Todo';

const List = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map((t) => (
      <Todo
        key={t.id}
        onClick={onTodoClick}
        text={t.text}
        completed={t.completed}
        id={t.id}
      />
    ))}
  </ul>
);

List.propTypes = {
  onTodoClick: func.isRequired,
  todos: arrayOf(shape({ id: string.isRequired })).isRequired,
};

export default List;
