import React, { useState } from "react";

export default function Incnum() {
 //   const state = useState();
//  console.log(state);

const [count, setcount] = useState(0);
  
const IncNum = () => {
  setcount(count+1)
  // console.log("clicked");
};


return (
  <>
    <div className="center">
      <h1>{count}</h1>
      <button className="btn #673ab7 deep-purple" onClick={IncNum}>
        Click Me
      </button>
    </div>
  </>
);
}
