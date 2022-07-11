import React, { useState, useEffect } from "react";

const Example = () => {
  const [widthCount, setWidthCount] = useState(window.screen.width);

  const actualWidth = () => {
    setWidthCount(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", actualWidth);

    return () => {
      window.removeEventListener("resize", actualWidth); //cleanup func
    };
  });

  return (
    <>
      <p>Size of Screen </p>
      <h3>{widthCount}</h3>
    </>
  );
};

export default Example;
