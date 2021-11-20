import React, { Component } from "react";

class Habit extends Component {
  handleIncrement = () => {
      this.props.onIncrement(this.props.habitoo)
      console.log(this.props.habitoo,'props habit')
  };

  handleDecrement = () => {
      this.props.onDecrement(this.props.habitoo)
  };

  handleDelete = () => {
      this.props.onDelete(this.props.habitoo)
      console.log(this.props.habitoo, 'habitoo')
  };

  render() {
    const { name, count } = this.props.habitoo;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
