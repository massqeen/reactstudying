import { connect } from 'react-redux';
import { VisibilityFilters, toggleTodo } from '../redux/actions';
import List from '../components/Todo/List';

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

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch) => ({
  onTodoClick: (id) => {
    dispatch(toggleTodo(id));
  },
});

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(List);
export default VisibleTodoList;
