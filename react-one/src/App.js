import React, { Component } from 'react';
import './App.css';
// import Person from './Person/Person'

class App extends Component {

  // understanding state

 state = {
    list,
  };

  // state = {
  //   person:[
  //     {name: "Mudassar", age: "24"},
  //     {name: "Azam", age: "24"},
  //   ]
  // }

  // handling method

  // switchNameHandler = () => {
      
  //   //alert("I'm clicked")
  //   // DON'T DO THIS : this.state.person[1].name = "Muneeb";
  //   this.setState({
  //     person:[
  //       {name: "Mudassar Ali", age:23}
  //     ]
  //   })
  // }

  // render() 
  // {
  //   return (
  //     <div className="App">
  //       <h2>Hi, I'm React Learner</h2>
  //       {/* DON'T DO THIS onClick="{this.switchNameHandler(), this will immediately fire up the event}" */}
  //       <button onClick={this.switchNameHandler}>Click me - I will blown out your mind</button>
  //       {/* accessing state properties */}
  //       <Person name={this.state.person[0].name} age={this.state.person[0].age}>I love to do programming</Person>
  //       {/* <Person name="Mudassar" age="23">I love to do programming, fucking programming</Person> */}
  //     </div>
  //   );
  //   //return React.createElement("div", {className:'App'}, React.createElement('h2',null,'Legacy Syntax of React'));
  // }
  render(){
    return (
      <div className="App">
        {this.state.list.map(item => (
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </div>
        ))}
      </div>
    );
  }
}

const list = [
  {
    title: "React",
    url: "https://facebook.github.io/react/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0
  }
];
export default App;
