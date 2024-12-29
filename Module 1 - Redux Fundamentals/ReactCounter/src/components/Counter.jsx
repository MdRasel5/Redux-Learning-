/* eslint-disable react/prop-types */

import Button from "./Button";
import Count from "./Count";

const Counter = ({ count, id, incrementCount, decrementCount }) => {
  return (
    <div className="bg-white shadow-lg border h-[150px] w-[400px] mb-10 flex flex-col justify-center items-center">
      <Count count={count} />

      <div className="flex gap-3">
        <Button handeler={() => incrementCount(id)}>Increment</Button>
        <Button handeler={() => decrementCount(id)}>Decrement</Button>
      </div>
    </div>
  );
};

export default Counter;
