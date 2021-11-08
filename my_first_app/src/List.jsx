import { useState } from "react";

function List() {
  const [arr, setArr] = useState([11, 22, 33]);

  const add = () => {
    const rnd = Math.round(Math.random() * 100);

    // const arrCopy = [...arr];
    // arrCopy.push(rnd);
    // setArr(arrCopy);

    // const arrCopy = [...arr, rnd];
    // setArr(arrCopy);

    setArr((state) => [...state, rnd]);
  };

  return (
    <div>
      <button onClick={add}>Добавить</button>
      <ul>
        {arr.map((el, i) => {
          return <li key={i}>{el}</li>;
        })}
      </ul>
    </div>
  );
}

export default List;
