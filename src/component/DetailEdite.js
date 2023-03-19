import React from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { editeuser } from "../redux/action/action";

function DetailEdite({ modal, item }) {
  const [name, setName] = useState(item.name);
  const [email, setEmail] = useState(item.email);
  const [phone, setPhone] = useState(item.phone);
  const [website, setWebsite] = useState(item.website);
  const handleClose = () => setShow(true);
  const handleShow = () => setShow(false);
  const dispatch = useDispatch();

  const [show, setShow] = useState(modal);
/* A state that is used to store the data that is being edited. */
  const [userdata, setUserdata] = useState({
    name: name,
    email: email,
    phone: phone,
    website: website,
  });

  /**
  
   * @param e - the event object
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(editeuser(userdata));
  };


/**
 * The function is called when the user clicks on the "Update" button. It takes the data from the form
 * and updates the state of the parent component
 */
  const handleclick = () => {
    setUserdata({
      ...item,
      name: name,
      email: email,
      phone: phone,
      website: website,
    });
    handleClose();
  };

  return (
    <>
      <Modal show={!show} onHide={show}>
        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
          <Button variant="" onClick={handleClose}>
            X
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>*Name</Form.Label>
              <Form.Control
                value={name}
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>*Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>*Phone</Form.Label>
              <Form.Control
                type="text"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>*Website</Form.Label>
              <Form.Control
                type="text"
                value={website}
                onChange={(e) => {
                  setWebsite(e.target.value);
                }}
              />
            </Form.Group>

            <Modal.Footer>
              <Button variant="outline-primary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" type="sumbit" onClick={handleclick}>
                Ok
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

// render(<Example />);

export default DetailEdite;
