import React, { useState, useContext } from "react";
import "./TaskForm.css";
import { taskContext } from "@/pages";
import { addTaskToList } from "@/Service/TaskServices";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "../UI/Button";
function Home() {
  const { taskList, setTaskList } = useContext(taskContext);
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
    bgcolor: "rgb(196, 223, 223)  ",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    color: "black",
  };

  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  
  const [formTaskName, setFormTaskName] = useState("");
  const [formTaskDesc, setFormTaskDesc] = useState("");
  const [inputError, setInputError] = useState("");
  const [descError, setDescError] = useState("");

  // Function to handle add button click on home
  const homeAddButtonHandler = () => {
    if (formTaskName.trim() === "") {
      setInputError("Please Enter a name");
    } else {
      setInputError("");
      handleModalOpen();
    }
  };

  // Function to handle add button on form modal
  const addNewTask = () => {
    const newTaskId = new Date().getTime().toString();
    const newTask = {
      taskId: newTaskId,
      taskName: formTaskName,
      taskDesc: formTaskDesc,
      taskCompleted: false,
    };

    // Using a function which was imported from TaskServices
    addTaskToList(newTask, setTaskList);

    setFormTaskName("");
    setFormTaskDesc("");
    handleModalClose();
  };
  return (
    <div className="form__container">
      <div className="form__name_input_container">
        <input
          type="text"
          className="form__name_input"
          placeholder="Name of the task"
          onChange={(e) => {
            setFormTaskName(e.target.value);
          }}
          value={formTaskName}
        />
        <div className="form__name_input_error inputError">{inputError}</div>
      </div>
      <Button onClick={homeAddButtonHandler}>Add</Button>
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
            onChange={(e) => {
              setFormTaskDesc(e.target.value);
            }}
            value={formTaskDesc}
          ></textarea>
          <div className="descError inputError">{descError}</div>
          <div>
            <Button
              onClick={() => {
                setFormTaskDesc("");
                handleModalClose();
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                if (formTaskDesc.trim() === "") {
                  setDescError("Please enter a description");
                } else {
                  setDescError("");
                  addNewTask();
                }
              }}
            >
              Add Task
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Home;
