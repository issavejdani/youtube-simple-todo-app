import React, { useState } from "react";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import { Alert, TextField } from "@mui/material";

const TodosPage = () => {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const clickHandler = () => {
    if (value === "") {
      // alert("please enter something");
      setShowAlert(true);
      return;
    }
    setShowAlert(false);
    // setList(value)
    const tempList = [...list];
    tempList.push(value);
    setList(tempList);
    setValue("");
  };

  const handleClearAll = () => {
    setList([]);
  };

  return (
    <>
      {/* heading */}
      <h2>
        Youtube Simple Todo App{" "}
        <IconButton aria-label="delete" color="primary" onClick={handleClearAll}>
          <DeleteIcon />
        </IconButton>
      </h2>

      {showAlert && <Alert severity="error">Please enter something!!!!!!</Alert>}

      {/* create new todo */}
      <div className="create-section">
        {/* <label>Todo</label> */}
        {/* <input type="text" className="input" value={value} onChange={(e) => setValue(e.target.value)} /> */}
        <TextField
          className="input"
          label="ToDo"
          variant="outlined"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        {/* <button className="button" onClick={clickHandler}>
            Save
          </button> */}
        <IconButton aria-label="delete" color="primary" onClick={clickHandler}>
          <SaveIcon />
        </IconButton>
      </div>

      {/* show our todo list */}
      <div className="todo-list">
        {list.length > 0 ? (
          list.map((item, index) => (
            <div key={index} className="todo-item">
              {item}
            </div>
          ))
        ) : (
          <h1>No Todo !!!!</h1>
        )}
      </div>
    </>
  );
};

export default TodosPage;
