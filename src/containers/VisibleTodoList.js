import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import VisibilityFilters from '../redux/actions/VisibilityFilters';
import List from '../components/Todo/List';
import toggleTodo from '../redux/actions/toggleTodo';
import deleteTodo from '../redux/actions/deleteTodo';

const { SHOW_COMPLETED, SHOW_ACTIVE } = VisibilityFilters;

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_COMPLETED:
      return todos.filter((t) => t.completed);
    case SHOW_ACTIVE:
      return todos.filter((t) => !t.completed);
    default:
      return todos;
  }
};

const VisibleTodoList = () => {
  const dispatch = useDispatch();

  const todosSelector = (state) => state.todos;
  const filterSelector = (state) => state.visibilityFilter;

  const selectFilteredTodos = createSelector(
    todosSelector,
    filterSelector,
    (currTodos, currFilter) => getVisibleTodos(currTodos, currFilter)
  );

  const onTodoClick = (id) => {
    dispatch(toggleTodo(id));
  };

  const onButtonClick = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <List
      todos={useSelector(selectFilteredTodos)}
      onTodoClick={onTodoClick}
      onButtonClick={onButtonClick}
    />
  );
};

export default VisibleTodoList;
