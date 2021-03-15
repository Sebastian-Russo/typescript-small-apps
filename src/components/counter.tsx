import React, { FC, useState } from 'react';
import '../styling/App.css';

export const Counter: FC<{initial: number}> = ({initial}) => {
  const [count, setCount] = useState(initial);

  const addClick = () => {
    setCount(count + 1)
  }

  const minusClick = () => {
    setCount(count - 1)
  }

  return (
    <div className="App">
      <div onClick={addClick}>Add</div>
      Count: {count}
      <div onClick={minusClick}>Minus</div>
    </div>
  );
}
