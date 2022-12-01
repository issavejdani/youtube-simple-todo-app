import { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");

  const clickHandler = () => {
    if (value === "") {
      alert("please enter something");
      return;
    }
    // setList(value)
    const tempList = [...list];
    tempList.push(value);
    setList(tempList);
    setValue("");
  };

  return (
    <div className="container">
      {/* heading */}
      <h2>Youtube Simple Todo App</h2>

      {/* create new todo */}
      <div className="create-section">
        <label>Todo</label>
        <input type="text" className="input" value={value} onChange={(e) => setValue(e.target.value)} />
        <button className="button" onClick={clickHandler}>
          Save
        </button>
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
    </div>
  );
}

export default App;
