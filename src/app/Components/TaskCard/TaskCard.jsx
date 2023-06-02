import React, { useState, useContext } from "react";
import "./TaskCard.css";
import { taskContext } from "@/pages";
import { deleteTaskFromList, editTaskInList } from "@/Service/TaskServices";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "../UI/Button";
function TaskCard(props) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    bgcolor: "rgb(196, 223, 223)",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    color: "black",
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [inputErrorMessage, setInputErroMessage] = useState("");
  const [descErrorMessage, setDescErrorMessage] = useState("");
  const [updatedTaskName, setUpdatedTaskName] = useState(props.task.taskName);
  const [updatedTaskDesc, setUpdatedTaskDesc] = useState(props.task.taskDesc);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);
  const { taskList, setTaskList } = useContext(taskContext);

  // Function to delete task on double click
  const taskDeleteHandler = (id) => {
    deleteTaskFromList(id, taskList, setTaskList);
  };

  const checkName = () => {
    if (updatedTaskName.trim() === "") {
      setInputErroMessage("Please Enter a name");
      return false;
    } else {
      return true;
    }
  };

  const checkDesc = () => {
    if (updatedTaskDesc.trim() === "") {
      setDescErrorMessage("Please Enter a Description");
      return false;
    } else {
      return true;
    }
  };
  const updateHandler = () => {
    let flag = true;
    flag = checkName() && flag;
    flag = checkDesc() && flag;
    if (flag) {
      let updatedData = {
        taskName: updatedTaskName,
        taskDesc: updatedTaskDesc,
      };
      editTaskInList(props.task.taskId, updatedData, taskList, setTaskList);
    }
  };
  return (
    <>
      <div
        className="taskCard__container"
        onDoubleClick={() => {
          taskDeleteHandler(props.task.taskId);
        }}
        onClick={() => {
          setTimeout(() => {
            handleModalOpen();
          }, 250);
        }}
      >
        <h3
          className={
            props.completed
              ? "taskCard__name taskCard__name_completed"
              : "taskCard__name"
          }
        >
          {props.task.taskName}
        </h3>
        <div
          className={
            props.completed
              ? "taskCard__desc taskCard__desc_completed"
              : "taskCard__desc"
          }
        >
          {props.task.taskDesc}
        </div>
      </div>
      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <input
            type="text"
            placeholder="Enter name of the task"
            className="editform__name_input"
            onChange={(e) => {
              setUpdatedTaskName(e.target.value);
            }}
            value={updatedTaskName}
          />
          <div className="editform__name_error inputError">
            {inputErrorMessage}
          </div>
          <textarea
            placeholder="Enter the description of Task"
            id=""
            cols="30"
            rows="10"
            className="editform__modal_text_area"
            onChange={(e) => {
              setUpdatedTaskDesc(e.target.value);
            }}
            value={updatedTaskDesc}
          ></textarea>
          <div className="editform__desc_error inputError">
            {descErrorMessage}
          </div>
          <div>
            <Button
              onClick={() => {
                handleModalClose();
                console.log("button clicked!!!");
              }}
            >
              Cancel
            </Button>
            <Button onClick={updateHandler}>Add Task</Button>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default TaskCard;
