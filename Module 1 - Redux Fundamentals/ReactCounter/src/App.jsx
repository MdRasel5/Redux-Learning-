/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { useState } from "react";

import "./App.css";
import Counter from "./components/Counter";
import Stats from "./components/Stats";

const initialState = [
  {
    id: 1,
    count: 0,
  },
  {
    id: 2,
    count: 1,
  },
];

function App() {
  const [state, setState] = useState(initialState);

  // eslint-disable-next-line no-unused-vars
  const totalCount = () => {
    return state.reduce((total, counter) => total + counter.count, 0);
  };

  // eslint-disable-next-line no-unused-vars
  const incrementCount = (id) => {
    const updatedCounter = state.map((c) => {
      if (c.id === id) {
        return {
          ...c,
          count: c.count + 1,
        };
      } else {
        return { ...c };
      }
    });

    setState(updatedCounter);
  };

  // eslint-disable-next-line no-unused-vars
  const decrementCount = (id) => {
    const updatedCounter = state.map((c) => {
      if (c.id === id) {
        return {
          ...c,
          count: c.count - 1,
        };
      } else {
        return { ...c };
      }
    });

    setState(updatedCounter);
  };

  return (
    <div className="flex items-center flex-col">
      {state.map((counter) => (
        <Counter
          key={counter.id}
          id={counter.id}
          count={counter.count}
          incrementCount={incrementCount}
          decrementCount={decrementCount}
        />
      ))}

      <Stats count={totalCount()} />
    </div>
  );
}

export default App;
