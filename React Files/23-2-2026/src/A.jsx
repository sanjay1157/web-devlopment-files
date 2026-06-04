import React, { useState } from "react";
import axios from "axios";

function A() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [login, setLogin] = useState("");

  const handleLogin = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: 1,
        email: email,
        password: pass,
      })
      .then((response) => {
        console.log(response.data);
        setLogin("Success");
      })
      .catch((error) => {
        console.log(error);
        setLogin("Failed");
      });
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />

      <input
        type="password"
        placeholder="Password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <br />

      <button onClick={handleLogin}>Login</button>

      <p>{login}</p>
    </div>
  );
}

export default A;