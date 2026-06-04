import React, { useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  // GET
  const handleClick = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // CLEAR LIST
  const clearList = () => {
    setUsers([]);
  };

  // POST
  const addUser = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        name: "John Doe",
        email: "john@example.com",
      })
      .then((response) => {
        console.log("POST Response:", response.data);
        setUsers([...users, response.data]); // add to UI
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // PUT
  const updateUserPut = () => {
    axios
      .put("https://jsonplaceholder.typicode.com/users/1", {
        id: 1,
        name: "sunny (PUT)",
        email: "sunny@gmail.com",
      })
      .then((response) => {
        console.log("PUT Response:", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // PATCH
  const updateUserPatch = () => {
    axios
      .patch("https://jsonplaceholder.typicode.com/users/1", {
        name: "sunny tony (PATCH)",
      })
      .then((response) => {
        console.log("PATCH Response:", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>User List</h2>

      <button onClick={handleClick}>Open List</button>
      <button onClick={clearList}>Clear List</button>
      <button onClick={addUser}>Add User (POST)</button>
      <button onClick={updateUserPut}>Update User (PUT)</button>
      <button onClick={updateUserPatch}>Update User (PATCH)</button>

      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default App;