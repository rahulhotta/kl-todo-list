import React from 'react'
import TaskCard from '../TaskCard/TaskCard'
import './TaskList.css'
function TaskList(props) {
  return (
    <div className='taskList__container'>
        {props.taskList.map((item)=>{
            return (
                <TaskCard name={item.name} desc={item.desc} completed={completed}/>
            )
        })}
    </div>
  )
}

export default TaskList