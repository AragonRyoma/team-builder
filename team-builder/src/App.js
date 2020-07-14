import React, { useState } from "react";
import "./App.css";
import Form from "./component/form";
import UserInfo from "./component/formCard";

function App() {
  const [team, setTeam] = useState([
    {
      id: Date.now(),
      name: "Lenny",
      email: "Lenny@email.com",
      role: "Student",
    },
  ]);

  const addNewData = (data) => {
    const newData = {
      id: Date.now(),
      name: data.name,
      email: data.email,
      role: data.role,
    };

    setTeam([...team, newData]);
  };

  return (
    <>
      <Form addNewData={addNewData} />
      {team.map((person) => (
        <UserInfo person={person} />
      ))}
    </>
  );
}

export default App;
