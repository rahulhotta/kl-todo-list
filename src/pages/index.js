import React, { useState,createContext } from "react";
import InputForm from "@/app/Components/TaskForm/TaskForm";
import TaskList from "@/app/Components/TaskList/TaskList";
import "./globalStyles.css";
import "./index.css";
import taskData from "../Service/Data";

export const taskContext = createContext()
function index() {
    const [taskList,setTaskList] = useState(taskData);
  return (
    <taskContext.Provider value={{taskList,setTaskList}}>
    <div className="home__container">
      <InputForm  setTaskList={setTaskList}/>
      <TaskList taskList={taskList}/> 
    </div>
    </taskContext.Provider>
  );
}

export default index;
