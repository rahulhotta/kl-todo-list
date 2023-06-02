// Function to add new tasks in to the list
export const addTaskToList = (newTask,databaseSetter) =>{
    databaseSetter((prevTask)=>{
        return [newTask,...prevTask]
    })
}

// Function to delete tasks from existing list

export const deleteTaskFromList = (taskId,database, databaseSetter) => {
    const updatedList = database.filter(item => item.taskId !== taskId )
    databaseSetter(updatedList)
}