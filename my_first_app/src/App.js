import { useState } from 'react';
import Cat from './Cat';
import List from './List';
import ToDoList from './ToDoList';

function App() {
  const [counter, setCounter] = useState(15);

  return (
    <div className='App'>
      {/* <h1>{counter}</h1>

      <button
        onClick={() => {
          // setCounter(counter + 1);
          // setCounter(counter + 1);
          // setCounter(counter + 1);
          setCounter((state) => state + 1);
          setCounter((state) => state + 1);
          setCounter((state) => state + 1);
        }}
      >
        +
      </button>

      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        -
      </button>
      <List /> */}
      <ToDoList />
      {/* <Cat /> */}
    </div>
  );
}

export default App;
