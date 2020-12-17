import React from 'react';
import { func, arrayOf, shape, string } from 'prop-types';
import Todo from './Todo';

const List = React.memo(({ todos, onTodoClick, onButtonClick }) => (
  <ul>
    {todos.map((t) => (
      <Todo
        key={t.id}
        onTodoClick={onTodoClick}
        onButtonClick={onButtonClick}
        text={t.text}
        completed={t.completed}
        id={t.id}
      />
    ))}
  </ul>
));

List.propTypes = {
  onTodoClick: func.isRequired,
  onButtonClick: func.isRequired,
  todos: arrayOf(shape({ id: string.isRequired })).isRequired,
};

export default List;
