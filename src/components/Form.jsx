import { useState } from "react";

const Form = () => {
  // email and password state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // handle submit
  const handleSubmit = (e) => {
    //submit to backend(http://localhost:3000/api/login)
    e.preventDefault();
    const data = {
      emailAddress: email,
      password: password,
    };

    fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Form;
