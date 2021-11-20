import React, { Component } from 'react'
import './App.css'
import Habits from './component/habits'
import Navbar from './component/navbar'

export default class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  }

  handleIncrement = (habit) => {
    const habits = [...this.state.habits]
    const index = habits.indexOf(habit)
    console.log(index, 'index')
    habits[index].count++
    this.setState({ habits: habits })
  }

  handleDecrement = (habit) => {
    const habits = [...this.state.habits]
    const index = habits.indexOf(habit)
    console.log(index, 'index')
    const count = habits[index].count - 1
    habits[index].count = count < 0 ? 0 : count
    this.setState({ habits: habits })
  }

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id)
    this.setState({ habits: habits })
  }

  handleAdd = (name) => {
    const habits = [...this.state.habits, {id: Date.now(), name: name, count: 0}];
    this.setState({habits: habits})
    
  }

  render() {
    return (
      <div>
        <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length} />
        <Habits
          habits={this.state.habits}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          handleDelete={this.handleDelete}
          onAdd={this.handleAdd}
        />
      </div>
    )
  }
}
