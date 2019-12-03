// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import Todo from "./Todo";

const TodoList = props => {
  return (
    <div>
      <h1> Todo List</h1>
      {props.todoItems.map(item => {
        return (
          <Todo
            id={item.id}
            item={item.task}
            completed={item.completed}
            toggleComplete={props.toggleComplete}
          />
        );
      })}
    </div>
  );
};
export default TodoList;
