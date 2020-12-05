// import React from 'react';
// import ReactDOM from 'react-dom';
import { createStore } from 'redux';
// import App from './App';
import todoApp from './redux/reducers';
import './index.css';

import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters,
} from './redux/actions';

const store = createStore(todoApp);

console.log('currState', store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState()));

// dispatch few actions
store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about store'));
store.dispatch(toggleTodo(store.getState().todos[0].id));
store.dispatch(toggleTodo(store.getState().todos[1].id));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

// stop listening state change
unsubscribe();

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
