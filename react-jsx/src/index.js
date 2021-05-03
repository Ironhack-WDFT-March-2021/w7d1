import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// this console.log is displayed in the browser
console.log('hello from the console');

// JSX creates React Elements
// const element = React.createElement('h1', {}, 'Hello World!');

// JSX - JavaScript extended
// const element = <h1>Hello React</h1>;

// Embed a JS variable in JSX - you can add any valid JS expression
const user = 'Anna';
const modifiedUser = user.toUpperCase() + '!!';
// const element = <h1>Hello {user.toUpperCase() + '!!'}</h1>;

// we can return JSX from functions
// const greet = () => {
//   return <h1>Hello from a function</h1>
// }
/*
ReactDOM.render(
  greet(),
  document.getElementById('root')
);
*/

// Wrap multiple lines in parantheses - you have to render ONE root element
// you can use a React Fragment <></> to solve this (or any other tag)
/*
const element = (
  <>
    <h1>
      Hello {user} !!!
    </h1>
    <h1>
      Hello all other users
    </h1>
  </>
)
*/
// some html attributes have different names, e.g class -> className, for -> htmlFor
// const element = <h1 className="greeting">Hello React</h1>;

// we need to close all the tags
// <br> -> <br /> <img src="" alt=""/>

const myStyle = {
  color: "red"
}

const element = (
  <div>
    <p style={{
      backgroundColor: "pink"
    }}>
      Random Number: {Math.floor(Math.random() * 10)}
    </p>
    <p style={myStyle}>
      Second Paragraph
    </p>
  </div>
)

ReactDOM.render(
  element,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
