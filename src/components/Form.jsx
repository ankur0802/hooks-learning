import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState('');

  const inputEvent = (event) => {
    // console.log(event.target.value);
    setName(event.target.value);
  };
  const onsubmit = (event) => {
    event.preventDefault();
    setFullName(name);
  };

  return (
    <>
      <div className="container">
     <form onSubmit={onsubmit}>
          <h1>Hello {fullName} </h1>
          <input
            type="text"
            placeholder="Enter your Name"
            onChange={inputEvent}
            value={name}
          />
          <button type="submit" className="btn" >
            Click Me
          </button>
          </form>
      </div>
    </>
  );
}
