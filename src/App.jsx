import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [task, setTask] = useState([]);

  function add() {
    setTask([...task, input]);
    setInput('');
    localStorage.setItem('task', JSON.stringify(task));
  }

  useEffect(() => {
    var tasks;

    tasks = localStorage.getItem('task');
    setTask(JSON.parse(tasks));
  }, []);

  return (
    <div className="App">
      <div className="container">
        <input
          type="text"
          placeholder="digite sua tarefa"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={add}>enviar</button>
      </div>
      <ul>
        {task.map((tar) => (
          <li key={tar}>{tar}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
