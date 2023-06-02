import React, { useState, useContext } from "react";
import "./TaskCard.css";
import { taskContext } from "@/pages";
import { deleteTaskFromList } from "@/Service/TaskServices";
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
    bgcolor: "rgb(191, 172, 226)",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    color: "black",
  };

  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);
  const { taskList, setTaskList } = useContext(taskContext);

  // Function to delete task on double click
  const taskDeleteHandler = (id) => {
    deleteTaskFromList(id, taskList, setTaskList);
  };
  return (
    <>
      <div
        className="taskCard__container"
        onDoubleClick={() => {
          taskDeleteHandler(props.task.taskId);
        }}
        onClick={handleModalOpen}
      >
        <div
          className={
            props.completed
              ? "taskCard__name taskCard__name_completed"
              : "taskCard__name"
          }
        >
          {props.task.taskName}
        </div>
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
          <textarea
            placeholder="Enter the description of Task"
            id=""
            cols="30"
            rows="10"
            className="form__modal_text_area"
          ></textarea>
          <div className="descError inputError"></div>
          <div>
            <Button
              onClick={() => {
                handleModalClose();
                console.log("button clicked!!!");
              }}
            >
              Cancel
            </Button>
            <Button>Add Task</Button>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default TaskCard;
