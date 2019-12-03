import React from "react";

import "./Todo.css";

const Todo = props => {
  return (
    <div
      key={props.id}
      className={`item${props.completed ? " completed" : ""}`}
      onClick={e => {
        props.toggleComplete(props.id);
      }}
    >
      <p>{props.item}</p>
    </div>
  );
};

export default Todo;
