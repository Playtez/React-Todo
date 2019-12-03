import React from "react";

import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

const todoItems = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todoItems: todoItems
    };
  }

  // design `App` to be the parent component of your application.

  // this component is going to take care of state, and any change handlers you need to work with your state
  addItem = newItemText => {
    // notice this is a method
    const newItem = {
      task: newItemText,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoItems: [...this.state.todoItems, newItem]
    });
  };
  handleChange = e => {
    // console.log(e.target.value);
    this.setState({ newItem: e.target.value });
    // this part allows you to set the input values to state
  };

  handleSubmit = e => {
    e.preventDefault();
    this.addItem(this.state.newItem);
    this.setState({
      newItem: ""
    });
  };

  toggleComplete = itemId => {
    const todos = this.state.todoItems.map(todo => {
      if (todo.id === itemId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({ todos, todo: "" });
  };

  render() {
    console.log("rendering");
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          newItem={this.state.newItem}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          // addItem={}
        />
        <TodoList
          todoItems={this.state.todoItems}
          toggleComplete={this.toggleComplete}
        />
      </div>
    );
  }
}

export default App;
