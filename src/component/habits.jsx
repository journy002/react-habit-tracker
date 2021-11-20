import React, { Component } from "react";
import Habit from "./habit";
import AddInput from "./addInput";

class Habits extends Component {
  handleIncrement = (habit) => {
    this.props.handleIncrement(habit);
  };

  handleDecrement = (habit) => {
    this.props.handleDecrement(habit);
  };

  handleDelete = (habit) => {
    this.props.handleDelete(habit);
  };

  handleAdd = name => {
    this.props.onAdd(name)
  }

  render() {
    return (
      <>
        <AddInput onAdd={this.handleAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            // map()함수는 자체적으로 return을 해준다.
            <Habit
              habitoo={habit}
              key={habit.id}
              onIncrement={this.handleIncrement} // 이 코드에서는 handleIncrement는 실행이 되는게 아니라 통으로 담고있는것 뿐이다. 실제로 사용되는건 habit 컴포넌트로 넘어갔을때 사용이 되는거임.
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default Habits;
