import React, { Component } from "react";

class AddInput extends Component {
    formRef = React.createRef();
  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name) // 이름이 비어있지 않다면 onAdd라는 함수에 name을 전달해주는 코드
    // this.inputRef.current.value = '';
    this.formRef.current.reset(); // 초기화 시키는 방법은 위아래 두가지로 사용할 수 있음.
  };

  render() {
    return (
      <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
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
