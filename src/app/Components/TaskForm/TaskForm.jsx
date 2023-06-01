import React, { useState } from "react";
import "./TaskForm.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "../UI/Button";
function Home() {
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
  const [taskName, setTaskName] = useState("");
  const [inputError, setInputError] = useState("");

  const addButtonHandler = () => {
    if (taskName.trim() === "") {
      setInputError("Please Enter a name");
    } else {
      setInputError("");
      handleModalOpen();
    }
  };
  return (
    <div className="form__container">
      <div className="form__name_input_container">
        <input
          type="text"
          className="form__name_input"
          placeholder="Name of the task"
          onChange={(e) => {
            setTaskName(e.target.value);
          }}
          value={taskName}
        />
        <div className="form__name_input_error">{inputError}</div>
      </div>
      <Button onClick={addButtonHandler}>Add</Button>
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
          <div>
            <Button onClick={handleModalClose}>Cancel</Button>
            <Button>Add Task</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Home;
