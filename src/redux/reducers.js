import { combineReducers } from 'redux';
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
} from './actions';

const { SHOW_ALL } = VisibilityFilters;

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

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

const todoApp = combineReducers({ todos, visibilityFilter });
export default todoApp;
