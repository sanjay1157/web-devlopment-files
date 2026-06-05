import React, { createContext, useContext, useState } from "react";

// Create Context
const UserContext = createContext();

function App() {
  const [user, setUser] = useState("John");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <h1>Context API Example</h1>
      <Profile />
      <ChangeUser />
    </UserContext.Provider>
  );
}

function Profile() {
  const { user } = useContext(UserContext);

  return <h2>Current User: {user}</h2>;
}

function ChangeUser() {
  const { setUser } = useContext(UserContext);

  return (
    <button onClick={() => setUser("Alice")}>
      Change User
    </button>
  );
}

export default App;