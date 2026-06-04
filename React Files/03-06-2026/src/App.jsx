import { useState } from "react";
import Greeting from "./Greeting";
import Parent from "./Parent";
import InputBox from "./InputBox";
import DisplayBox from "./DisplayBox";

function App() {
  // State for State Lifting example
  const [name, setName] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Concepts Demo</h1>

      {/* Props Example */}
      <h2>1. Props Example</h2>
      <Greeting name="John" />

      <hr />

      {/* Props Drilling Example */}
      <h2>2. Props Drilling Example</h2>
      <Parent user="Alice" />

      <hr />

      {/* State Lifting Example */}
      <h2>3. State Lifting Example</h2>
      <InputBox name={name} setName={setName} />
      <DisplayBox name={name} />
    </div>
  );
}

export default App;