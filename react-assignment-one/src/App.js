import React, { Component } from 'react';
import './App.css';
import Input from './UserInput/UserInput'
import Output from './UserOutput/UserOutput'

class App extends Component {

  state ={
    username: "Mudassar"
  }

  onUsernameChangeHandler =(event)=>{
    this.setState({username:event.target.value})
  }

  render() {
    return (
      <div className="App">
       <p>Solving Assignment</p>
       <Input changed={this.onUsernameChangeHandler} currentUsername={this.state.username} />
       <Output msg={this.state.username}/>
       <Output msg="Hello, I'm doing assignment"/>
       <Output msg={this.state.username}/>

      </div>
    );
  }
}

export default App;
