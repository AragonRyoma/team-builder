import React from "react";

const UserInfo = (props) => {
  return (
    <div>
      <div key={props.person.id}>
        <h2>Name: {props.person.name}</h2>
        <p>Email: {props.person.email}</p>
        <p>Role: {props.person.role}</p>
      </div>
    </div>
  );
};

export default UserInfo;
