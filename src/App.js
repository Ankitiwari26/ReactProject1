import { useState } from "react";
import React from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <h1>Hello World</h1>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
