import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import TodoList from './TodoList.js';

let initialState = {todos: [ {task : "Wash dishes", completed : false} ]};

function reducer(state = initialState, action) {
  switch(action.type) {
    case "ADD_TODO":
      return {todos: [...state.todos, {task: action.task, completed: false}]};

    case "TOGGLE_TODO":
      return {todos: state.todos.map((todo) => {
        if(todo.task == action.task) {
          return {...todo, completed: !todo.completed}
        } else {
          return todo;
        }
      })}
  }
  return state;
}

let store = createStore(reducer);

function App() {
  return <div>
    <h1>Todo list</h1>
    <TodoList />
  </div>
}

let mountPoint = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  mountPoint
);
