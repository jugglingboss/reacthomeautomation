import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <h1>{props.message}</h1>
      <button onClick={() => console.log("hi")}>Button</button>
      <button onClick={() => <ShowMessage/>}>Button</button>
    </div>
  );
}

function ShowMessage () {
  return(
    <p>You found the top secret message</p>
  )
}

export default App;
