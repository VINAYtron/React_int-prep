import React, { useState } from "react";

const Counters = (WrappedComp) => {
  function Counter() {
    const [count, setCount] = useState(0);
    function increment() {
      setCount(count + 1);
    }
    return (
      <>
        <WrappedComp count={count} increment={increment} />
      </>
    );
  }
  return Counter;
};

export default Counters;
