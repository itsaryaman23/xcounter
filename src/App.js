import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={()=>{
        setCount(c=>c+1);
      }}>Increment</button>
      <button onClick={()=>{setCount(c=>c-1)}}>Decrement</button>
    </div>
  );
}

export default App;
