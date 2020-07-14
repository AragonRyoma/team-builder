import React, { useState } from "react";

function Form(props) {
  const [user, setUser] = useState({
    key: Date.now(),
    name: "",
    email: "",
    role: "",
  });

  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name !== "" && user.email !== "" && user.role !== "") {
      setUser({ name: "", email: "", key: Date.now(), role: "" });
      props.addNewData(user);
    }
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
        <label>
          Role:
          <input
            id="role"
            type="text"
            onChange={changeHandler}
            name="role"
            value={user.role}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;
