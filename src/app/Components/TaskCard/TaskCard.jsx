import React from 'react'
import './TaskCard.css'
function TaskCard(props) {
  return (
    <div className='taskCard__container'>
        <div className={props.completed?'taskCard__name taskCard__name_completed':'taskCard__name'}>{props.name}</div>
        <div className={props.completed?'taskCard__desc taskCard__desc_completed':'taskCard__desc'}>{props.desc}</div>
    </div>
  )
}

export default TaskCard