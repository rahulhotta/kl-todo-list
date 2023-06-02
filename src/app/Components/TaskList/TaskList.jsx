import React from "react";
import TaskCard from "../TaskCard/TaskCard";
import "./TaskList.css";
function TaskList(props) {
  return (
    <div className="taskList__container">
      {props.taskList.length == 0 ? (
        <h1>You dont have any tasks</h1>
      ) : (
        props.taskList.map((item) => {
          return <TaskCard key={item.taskId} task={item} />;
        })
      )}
      {/* {props.taskList.map((item)=>{
            return (
                <TaskCard key={item.taskId} task={item}/>
            )
        })} */}
    </div>
  );
}

export default TaskList;
