import React, {useState} from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

const DeleteModal = (props) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const deleteButtonHandler = () => {
        props.deleteTask(props.task.id)
        toggle();
    }
    return (
        <div>
            <Button color="danger" onClick={toggle}>Delete</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Are you sure you want to delete</ModalHeader>
                <ModalBody>
                    this: {' '} {props.task.title} ?
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={deleteButtonHandler}>Yes</Button>{' '}
                    <Button color="secondary" onClick={toggle}>No</Button>
                </ModalFooter>
            </Modal>
        </div>

    );
};

export default DeleteModal;