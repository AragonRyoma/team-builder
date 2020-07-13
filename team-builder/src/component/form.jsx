import React, { useState } from "react";

function Form() {
  const [user, setUser] = useState({ key: Date.now(), name: "", email: "" });

  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ name: "", email: "" });
    console.log(user.name);
    console.log(user.email);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            id="name"
            type="text"
            onChange={changeHandler}
            name="name"
            value={user.name}
          />
        </label>

        <label>
          Email:
          <input
            id="email"
            type="email"
            onChange={changeHandler}
            name="email"
            value={user.email}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;
