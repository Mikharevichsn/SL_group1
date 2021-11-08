import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const [inputText, setInputText] = useState("");

  const add = () => {
    dispatch(addTask(inputText));
  };

  const del = (ind) => {
    dispatch(deleteTask(ind));
  };

  return (
    <div className="App">
      <input value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <button onClick={add}>Добавить рандом задачу</button>
      <div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task.title} <button onClick={() => del(index)}>Удалить</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
