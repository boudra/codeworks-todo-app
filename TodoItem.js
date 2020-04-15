import React from 'react';
import ReactDOM from 'react-dom';

import {connect} from 'react-redux';

function TodoItem({todo, toggleTodo, something}) {
  return <div onClick={() => toggleTodo(todo.task)}>
    {todo.completed ? "COMPLETED" : ""} {todo.task}
  </div>;
}

function mapDispatchToProps(dispatch) {
  return {
    toggleTodo: (task) => {
      dispatch({
        type: "TOGGLE_TODO",
        task: task
      });
    }
  };
}

export default connect(null, mapDispatchToProps)(TodoItem);
