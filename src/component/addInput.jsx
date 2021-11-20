import React, { Component } from "react";

class AddInput extends Component {
  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name) // 이름이 비어있지 않다면 onAdd라는 함수에 name을 전달해주는 코드
    this.inputRef.current.value = '';
  };

  render() {
    return (
      <form className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="habit"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default AddInput;
