import React, { useState } from "react";
import Timer from "./Timer";

function App() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div className="App">
      <h1>Toggle Timer Example</h1>
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? "Hide Timer" : "Show Timer"}
      </button>
      {showTimer && <Timer />}
    </div>
  );
}

export default App;
