import React from 'react'

import TodoList from "./TodoList/TodoList"
class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
          items: [],
          text: '',
          placeholder: 'Enter your new task' 
        };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      const color = "color:red";
      const buttonStyle = {
           backgroundColor: "blue",
           color: "white",
           border: "1px solid black",
           padding: "2px",
           margin: "1px", 
           cursor: "pointer",
      };
      const inputStyle = {
          backgroundColor: "#ccc",
          padding: "2.5px",
          color: "red",
          margin: "2px",
          border: "none",
      }
      return (
        <div>
          <h3 style={{color}}>My ToDo App</h3>
          <TodoList items={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
              What needs to be done?
            </label>
            <input style={inputStyle}
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
              placeholder={this.state.placeholder}
            />
            <button style = {buttonStyle}>
              Add #{this.state.items.length + 1}
            </button>
          </form>
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
    
    handleSubmit(e) {
      e.preventDefault();
      
      if ((this.state.text).trim().length===0) {
        this.setState(state => ({
            text: ''
        }));
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };

      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  }
  

export default TodoApp