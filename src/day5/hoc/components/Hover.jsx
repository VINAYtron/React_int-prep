import React from "react";
import Counters from "./Counters";

function Hover() {
  const { count, increment } = props;

  return (
    <>
      <button onClick={increment}>B {count} Click</button>
    </>
  );
}
export default Counters(Hover);
