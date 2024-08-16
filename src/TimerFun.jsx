import React, { useEffect, useState } from "react";

export default function TimerFun() {
  const [value, setValue] = useState(0);

  function handlePlus() {
    setValue((prev) => prev + 1);
  }

  function handleSub() {
    setValue((prev) => prev - 1);
  }
  useEffect(() => {
    console.log(value);
  });

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => setValue(0)}>Reset</button>
      <button onClick={handlePlus}>Plus(+1)</button>
      <button onClick={handleSub}>Sub(-1)</button>
    </div>
  );
}
