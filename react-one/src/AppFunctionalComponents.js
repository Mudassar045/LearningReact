import React, { setState } from 'react'

import './App.css';
import Person from './Person/Person'
const app = props => {
const [personsState,setPersonsState] = useState({
  persons:[
    {name: "Mudassar Ali", age:23},
    {nmae: "M. Azam",age:26}

  ] 
});

const [otherState,setOtherState] = useState("Some other value");
console.log(personsState,otherState);

  switchNameHandler = () => {
    setPersonsState({
      persons:[
        {name:"Mudassar",age:24},
        {name:"Muhammad Aza",age:26}
      ]
    });
  }
  
  return (
      <div className="App">
        <h2>Hi, I'm React Learner</h2>
        {/* DON'T DO THIS onClick="{this.switchNameHandler(), this will immediately fire up the event}" */}
        <button onClick={switchNameHandler}>Click me - I will blown out your mind</button>
        {/* accessing state properties */}
        <Person name={personsState.person[0].name} age={personsState.person[0].age}>I love to do programming</Person>
        {/* <Person name="Mudassar" age="23">I love to do programming, fucking programming</Person> */}
      </div>
    );
    //return React.createElement("div", {className:'App'}, React.createElement('h2',null,'Legacy Syntax of React'));
}

export default app;