import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateTodo } from "../Redux/Slice/todoSlice";

const InpuntCom = ({ todo }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newTitle, setnewTitle] = useState("");
  const dispatch = useDispatch();
  return (
    <>
      <h1
        className={todo.finished ? "showed" : ""}
        variant="primary"
        onDoubleClick={handleShow}
      >
        {todo.title}
      </h1>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Todo</Form.Label>
              <Form.Control
                placeholder={todo.title}
                autoFocus
                onChange={(e) => setnewTitle(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              return (
                dispatch(
                  updateTodo({
                    id: todo.id,
                    todo: { ...todo, title: newTitle },
                  })
                ),
                handleClose()
              );
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default InpuntCom;
