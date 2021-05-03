import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// create a greeting component
// class component

// class Greeting extends React.Component {
//   // accessing a prop in the class component:
//   render() {
//     console.log(this.props);
//     return <h1>{this.props.message} {this.props.user}</h1>
//   }
// }

// functional component
const Greeting = (props) => {
  console.log(props);
  return <h1>{props.message} {props.user}</h1>
}

ReactDOM.render(
  // this is how we reference a component
  // <Greeting user="Bob" message="Hi" />,
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
