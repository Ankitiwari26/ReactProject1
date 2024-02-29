import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import UserList from "./UserList";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter the valid name (non empty)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter the valid age (non empty)",
      });
      return;
    }
    props.onAddUser(enteredUserName, enteredAge);
    setEnteredUserName("");
    setEnteredAge("");
  };

  const usernameChangehandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangehandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUserName}
            onChange={usernameChangehandler}
          />
          <label htmlFor="userage">Age (Years)</label>
          <input
            id="userage"
            type="number"
            value={enteredAge}
            onChange={ageChangehandler}
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </>
  );
};
export default AddUser;
