import React, { useState } from "react";
import InputForm from "@/app/Components/TaskForm/TaskForm";
import TaskList from "@/app/Components/TaskList/TaskList";
import "./globalStyles.css";
import "./index.css";
function index() {
    const [taskList,setTaskList] = useState([])
  return (
    <div className="home__container">
      <InputForm  setTaskList={setTaskList}/>
      <TaskList taskList={taskList}/>
      
    </div>
  );
}

export default index;
