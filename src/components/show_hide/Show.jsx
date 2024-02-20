import React from "react";
import { useState } from "react";

const Show = () => {
  const [visible, setVisible] = useState(false);

  const visibleFuntion = () => {
    setVisible(!visible);
  };

  return (
    <div>
      {visible ? <h1>NISCHIT D S</h1> : <div></div>}
      <button onClick={visibleFuntion}>SHOW/HIDE</button>
    </div>
  );
};

export default Show;
