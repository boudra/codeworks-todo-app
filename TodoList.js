import React from 'react';
import ReactDOM from 'react-dom';

import {connect} from 'react-redux';

import TodoItem from './TodoItem.js';

function TodoList({todos}) {
  return <div>{todos.map((todo, index) => <TodoItem key={index} todo={todo} />)}</div>;
}

function mapStateToProps(state) {
  return {todos: state.todos};
}

export default connect(mapStateToProps)(TodoList);
