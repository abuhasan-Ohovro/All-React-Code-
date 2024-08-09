import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(10);
  const add_value = () => {
    setCounter(counter + 1);
  };
  const remove_value = () => {
    setCounter(counter-1)
  }
  return (
    <>
      <h1> Hey,I am Learning React!</h1>
      <h2>Counter App : {counter}</h2>
      <button onClick={add_value}>Add Value : : {counter}</button> {"   "}
      <button onClick={remove_value}>Remove Value : :{counter}</button>
      <br />
      <br />
      <br />
      <button>{counter}</button>
      <hr />
      <button>{counter}</button>
      <hr />
      <button>{counter}</button>
      <hr />
      <button>{counter}</button>
      <hr />
      <button>{counter}</button>
      <hr />
      <button>{counter}</button>
      <hr />
      <button>{counter}</button>
      <hr />
      <button>{counter}</button>
      <hr />
      <footer>
        <h1>Footer Says :{counter} </h1>
      </footer>
    </>
  );
}

export default App;
