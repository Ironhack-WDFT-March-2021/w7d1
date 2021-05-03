import logo from './logo.svg';
import React from 'react';
import './App.css';
import Profile from './Profile';

export default class App extends React.Component {
  render() {
    const user = {
      name: 'Alice',
      email: 'alice@gmail.com',
      picture: 'https://bit.ly/2zVs57p'
    }
    return (
      <div className="App" >
        <header className="App-header">

          <Profile picture={user.picture} email={user.email} name={user.name} />

        </header>
      </div>
    );
  }
}