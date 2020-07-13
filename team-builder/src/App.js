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
    },
  ]);

  const addNewData = (data) => {
    const newData = {
      id: Date.now(),
      name: data.name,
      email: data.email,
    };

    setTeam([...team, newData]);
  };

  return (
    <>
      <Form addNewData={addNewData} />
      <UserInfo user={team} />
    </>
  );
}

export default App;
