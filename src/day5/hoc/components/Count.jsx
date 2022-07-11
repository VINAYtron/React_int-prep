import React from "react";
import Counters from "./Counters";

function Count() {
  const { count, increment } = props;

  return (
    <>
      <button onClick={increment}>A {count} Click</button>
    </>
  );
}
export default Counters(Count);
