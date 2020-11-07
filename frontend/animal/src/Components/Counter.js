import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(25312);
  return (
    <div>
      <div>{counter}</div>
    </div>
  );
};

export default Counter;
