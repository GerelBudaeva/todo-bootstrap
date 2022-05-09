import React, {useState} from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

const EditTask = (props) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal)

    const [inputTitle, setInputTitle] = useState('');
    const [inputDescription, setInputDescription] = useState('');
    const [inputStatus, setInputStatus] = useState('');
    const [inputPriority, setInputPriority] = useState('');


    return (
        <div>
            <Button color="danger" onClick={toggle}>Edit</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}> Edit task</ModalHeader>
                <ModalBody>
                    <input type="text"
                    placeholder="Title"
                    value={inputTitle}
                           onChange={(e) => setInputTitle(e.target.value)}
                    />
                    {' '}
                    <input type="text"
                           placeholder="Description"
                           value={inputDescription}
                           onChange={(e) => setInputDescription(e.target.value)}
                    />
                    {' '}
                    <input type="text"
                           placeholder="Status"
                           value={inputStatus}
                           onChange={(e) => setInputStatus(e.target.value)}
                    />
                    {' '}
                    <input type="text"
                           placeholder="Priority"
                           value={inputPriority}
                           onChange={(e) => setInputPriority(e.target.value)}
                    />

                </ModalBody>
                <ModalFooter>
                    <Button color="primary">Yes</Button>{' '}
                    <Button color="secondary" onClick={toggle}>No</Button>
                </ModalFooter>
            </Modal>

        </div>
    );
};

export default EditTask;