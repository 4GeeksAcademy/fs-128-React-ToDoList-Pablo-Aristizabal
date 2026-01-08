import React, { useState } from "react";

const NewTask = () => {

  const [Task, setTask] = useState("")
  const [ToDoList, setToDoList] = useState([])

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      if (Task.trim() == "") {
        alert("Please add a task")
        return
      }
      setToDoList([...ToDoList, Task])
      setTask("")
    }
  }

  const handleDelete = (taskToDelete) => {
    const updatedList = ToDoList.filter((tarea, index) => index !== taskToDelete);
    setToDoList(updatedList);
  };

  return (
    <div className="container page">
      <input
        className="input mb-3 mt-2 container"
        type="text"
        value={Task}
        onChange={(e) => setTask(e.target.value)}
        Task="Task"
        onKeyUp={handleKeyUp}
        placeholder="What needs to be done?"
        name="inputItem"
      />

      <ul>
        {
          ToDoList.length > 0 ? ToDoList.map((tarea, index) => {
            return (
              <div className="listItem" key={index}>
                <li> {tarea}</li>
                <button type="button" onClick={() => { handleDelete(index) }} className="btn-close" aria-label="Close"></button>
              </div>
            )
          }) :
            <p>No items to show</p>
        }
      </ul>
    </div>
  )
}

export default NewTask;