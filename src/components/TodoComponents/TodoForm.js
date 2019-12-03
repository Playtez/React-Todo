import React from "react";

class TodoForm extends React.Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       newItem: ""
  //     };
  //   }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input
          type="text"
          name="todo"
          placeholder="add item"
          value={this.props.newItem}
          onChange={this.props.handleChange}
        />
        <button>Add Todo</button>
        <button onClick={this.props.removeItems}>Clear Completed </button>
      </form>
    );
  }
}
export default TodoForm;
