import React, { FC } from 'react';
import { Counter } from './counter';
import '../styling/App.css';

const App: FC = () => {
  return (
    <div className="App">
      <Counter initial={0}/>
    </div>
  );
}

export default App;
