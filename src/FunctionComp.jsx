import React, { useState } from "react";

export default function FunctionComp() {
  const [email, setEmail] = useState("Hello@gmail.com");
  function handleChange(e) {
    setEmail(e.target.value);
  }
  return (
    <div>
      <input type="text" value={email} onChange={handleChange} />
      <h3>Email:- {email}</h3>
    </div>
  );
}
