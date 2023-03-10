import React, { useState } from "react";

export default function LoginForm() {
  const [name, setName] = useState("");
  const [password, setpassword] = useState("");
  const [fullname, setfullName] = useState("");
  const [npassword, setnpassword] = useState("");

  const handleChange = (event) => {
    setName(event.target.value)
  };
  const handleChange2 = (event)=>{
    setpassword(event.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setfullName(name)
    setnpassword(password)
  };
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h4>Enter Email. {fullname}</h4>
          <input
            type="text"
            placeholder="Enter Email"
            onChange={handleChange}
            value={name}
          />
          <h4>Enter Password. {npassword}</h4>
          <input
            type="password"
            placeholder="Enter Password"
            onChange={handleChange2}
            value={password}
          
          />
          <button type="submit" className="btn">
            Login!
          </button>
        </form>
      </div>
    </>
  );
}
