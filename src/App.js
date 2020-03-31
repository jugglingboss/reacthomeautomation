import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  const [toggle, setToggle] = useState(false);

  const modifyToggle = () => {

    setToggle(!toggle)
  }
  return (
    <div className="App">
      <h1>{props.message}</h1>
      <button onClick={() => console.log("hi")}>Button</button>
      <button onClick={modifyToggle}>Button</button>
      {toggle && <ShowMessage />}
      <AcceptInput/>
    </div>
  );
}

function ShowMessage () {
  return(
    <p>You found the top secret message</p>
  )
}

function AcceptInput () {
  return(
    <form onSubmit={}>
      <input
        type="text"
        placeholder="here"
      />
      <button>Submit</button>
    </form>
  )
}

export default App;
