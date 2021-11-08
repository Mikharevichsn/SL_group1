import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import cn from 'classnames';
import './ToDoList.css';

const ToDoList = () => {
  const [inputText, setInputText] = useState('');
  const [tasks, setTasks] = useState([]);

  //useEffect(() => {}); // каждый рендер

  useEffect(() => {
    console.log('я сработал на 1 рендер');
    try {
      const tasksFromStorage = localStorage.getItem('tasks') || [];
      console.log('tasksFromStorage = ', tasksFromStorage);
      const parsedTasks = JSON.parse(tasksFromStorage);
      console.log('parsedTasks = ', parsedTasks);
      setTasks(parsedTasks);
    } catch (err) {
      console.log('error = ', err);
      setTasks([]);
    }
  }, []); // 1 раз на 1 рендер

  useEffect(() => {
    console.log('таски обновились');
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]); // отслеживает tasks и запускает ф-цию если tasks поменялся

  console.log('tasks = ', tasks);

  const addTask = () => {
    if (inputText.trim() === '') return alert('Нельзя добавить пустоту');
    if (tasks.some((el) => el.title.toLowerCase() === inputText.toLowerCase()))
      return alert('Такая задача уже есть');
    const tasksCopy = [...tasks];
    tasksCopy.push({ id: uuid(), title: inputText, isDone: false });
    setTasks(tasksCopy);
    setInputText('');
  };

  const deleteTask = (id) => {
    console.log('delete clicked');
    console.log(id);

    const filteredTasks = tasks.filter((el) => el.id !== id);

    if (filteredTasks.length === 0) localStorage.removeItem('tasks');

    console.log('filteredTasks = ', filteredTasks);
    setTasks(filteredTasks);
  };

  const complete = (id) => {
    console.log(id);
    const changedTasks = tasks.map((el) => {
      if (el.id === id) {
        return { ...el, isDone: !el.isDone };
      }
      return el;
    });

    setTasks(changedTasks);
  };

  return (
    <div className='todo-wrapper'>
      <form
        onSubmit={(event) => {
          console.log('submit event');
          event.preventDefault();
          addTask();
        }}
      >
        <input
          type='text'
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
        />
        <button type='submit'>Добавить задачу</button>
        <button type='button'>я просто кнопка!</button>
      </form>

      <ul className='list'>
        {tasks.map((el) => {
          return (
            // <li key={el.id} className={`task ${el.isDone ? 'task-done' : ''}`}>
            <li key={el.id} className={cn('task', { 'task-done': el.isDone })}>
              <div className='title'>{el.title}</div>
              <button
                className='btn btn-complete'
                onClick={() => complete(el.id)}
              >
                {el.isDone ? 'Вернуть' : 'Завершить'}
              </button>
              <button className='btn' onClick={() => deleteTask(el.id)}>
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
