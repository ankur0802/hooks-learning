import React, { useState } from "react";

export default function Challange8() {
  const [count, setCount] = useState(0);

  const increase = (e) => {
    setCount(count+1)
  };

  const decrease = (e) => {
    if(count===0) {return alert(`Max limit reach can't decrese below zero`)}
        else{setCount(count -1)}
  };

  return (
    <>
      <div className="container ">
        <h1 className="center green">{count}</h1>
        <br />
        <button className="btn left" onClick={increase}>
          Increment
        </button>

        <button className="btn right" onClick={decrease}>
          decrement
        </button>
      </div>
    </>
  );
}
