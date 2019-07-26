<p align="center"><img src="./reactjs.svg" height="180" width="180" alt="header-image"></p>
<h1 align="center"> Learning ReactJS </h1>

<p align="center"
  <a href="https://github.com/mudassar045">
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome">
  </a>
</p>

## Welcome

I am going to learn ReactJS from basic to advance, while learning I love to share stuff through this repo and for more tips and tricks you can follow me on [twitter - voidwebdev](https://twitter.com/voidwebdev)

## What is React

React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called **“components”**. -  For more visit [ReactJs]("https://reactjs.org")

## Tools Installation

Here are the following tools you need to install before jumping on **`ReactJS`**

- Download and Install [Node/npm](https://nodejs.org) - Development Server and Node Package Manager
- Install Visual Studio Code [VS Code](https://code.visualstudio.com)

### Check Installation via CMD

- To check Node Installtion
  >  $ node --version
- To check npm Installation
  > $ npm --version

## Create First React App

To create your first react app, follow the steps below

- Create an empty folder and open ``CMD`` here
- Run the command

  > $ create-react-app react-one --scripts-version 1.5.5

- Change the directory to new created **`react-one`**

  > $ cd react-one

- Run start the application

  > $ npm start

## 1. Base Syntax Assignment - Simple React Functionality

Here are the following tasks, that will be completed

- Create two components **`UserInput`** and **`UserOutput`**
- UserInput should hold an *input element* and UserOutput two *paragraphs*
- Output multiple UserOutput componenets in **App**
- Pass a *username* (of your choice) to **`UserOutput`** via **props** and display it there
- Add **state** to the App component (=:> the username) and pass the username to the UserOutput component

- Pass the **`EventHandler`** method reference to the UserInput component and bind it to the **input-change** event

- Ensure that the new input entered by the user overwrites the old username passed to the UserOutput

- Add **``Two-Way-Binding``** to your input (in UserInput) to also display the starting username

- Add styling of your choice

## ES6 Learning

- Classes

    ```

    class Person
    {
      constructor(name, age){
        this.name = name;
        this.age  = age;
      }

      getName(){
        console.log(this.name);
      }
      getAge(){
        console.log(this.age);
      }
    }

    // creating object
    const person = new Person("Mudassar",23);
    // calling methods
    person.getName();
    person.getAge();

    ```
  You can check out example on [JSBIN - Mudassar045](https://jsbin.com/wemudom/edit?js,console)

- Exports and Imports (Modules)

  * Exports
    
    Let say we have two files

    ```
    # person.js
    const person = {
      name: "Mudassar"
    }
    ```
    
    > export default person

    ```
    # utility.js
    const cleaner = ()=>{}
    const baseData = 10
    ```  
    > export clearner

    > export baseData

  * import

    If ``Default Exported``
    > import person from "./person.js"
    
    OR

    > import prs from "./"

    If ``Named Exported``

    > import {baseData} from "./utility"

    > import {clearner} from "./utility"

- Arrow Function

  There are two types of arrow function available in ``ES6``

  - **Block Body**
    Block body arrow function must contains ``return`` and ``curly braces``

    ```
    const ret = (num) => { return num===1 ? true : false }
    ```

  - **Consise Body**

    ```
    const ret = (num) => num===1 ? true : false
    ```
    OR

    ```
    const ret = num => num===1 ? true : false
    ```

    Similarly

    ```
    const ret = (alpabet,num) => num==alphabet ? true : false
    ```

  * For more knowledge - visit [ES6 Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

- Spread and Rest Operators

  * Spread operator works with ``arrays and objects``
   
  * Rest operator works with ``function arguments``

  * You can check out example on [JSBIN - Mudassar045](https://jsbin.com/ladajey/3/edit?js,output)

- Named parameters
   
   Here is the example code for named params

   ```
   function sum({ a:a, b:b}) {
      console.log(a+'+'+b);
      if(a==undefined) a=0;
      if(b==undefined) b=0;
      return (a+b);
    }

    // will work (returns 9 and 3 respectively)
    console.log(sum({a:4,b:5}));
    console.log(sum({a:3}));

    // will not work (returns 0)
    console.log(sum(4,5));
    console.log(sum(4));
   ```
- Destructoring Assignment

  The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

  ```
  var a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20


// Stage 4(finished) proposal
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}
  ```

  [ES6 - Destructoring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

## Learning about Redux

   - What is Redux - Redux is a predictable state container for JavaScript apps.

   - **Basics Learning**

     * **Actions**

       Actions are ``payloads of information`` that **send data** from your application to your **store**. They are the only source of information for the store.

       > const ADD_ITEM = 'ADD_ITEM'

       ```
       {
         type: ADD_ITEM,
         text: 'Learning about Redux'
       }
       ```

       **Action Creators**

       Function that create actions are called ``action creators``. For example

       ```
       function addItem(text)
       {
         return{
           type: ADD_ITEM,
           text
         }
       }
       ```
       **Action Dispatch**

       To dispatch an action, just passed to ``store.dispath()`` method

       > dispatch( addItem( text ) )

       **Bound Action Creator**

       ```
       {
         const boundAddItem = text => dispatch( addItem(item) ); 
       }
       ```
       Now you can call them directly as follow
       > boundAddItem(text)

     * **Reducers**

        - Reducers specify how the application's state changes in response to actions sent to the store.
        - Reducer is a pure function
        - Must think of ``shape of application state`` in Redux
        - Reducer takes previous state, action and return next state

          > ( prevState, action ) => nextState
        
        *Things you should Never Do in Redux (pure function)*

        - Mutate its arguments
        - Perform side effects like API calls and routing transitions
        - Call ``non-pure functions``, e.g. `Date.now()` or `Math.random()`

     * **Store**
     * **Data Flow**  

<br/>

[:arrow_up: Back to top](#-learning-reactjs-)
