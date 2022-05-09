import React, {useState} from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

const AddNewTask = (props) => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [titleInput, setTitleInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');
    const [statusInput, setStatusInput] = useState('');
    const [priorityInput, setPriorityInput] = useState('');

    const addButtonHandler = () => {
        props.addNewTask(titleInput, descriptionInput);
        setTitleInput('');
        setDescriptionInput('')
    }


    return (
        <div>
            <Button
                color="primary"
                onClick={toggle}
            >
                Create Task
            </Button>
            <Modal
                toggle={toggle}
            >
                <ModalHeader toggle={toggle}>
                    Create Task
                </ModalHeader>
                <ModalBody>
                    <input type="text"
                           placeholder="Title"
                           value={titleInput}
                           onChange={(e) => setTitleInput(e.target.value)}
                    />
                    <br/>
                    <input type="text"
                           placeholder="Description"
                           value={descriptionInput}
                           onChange={(e) => setDescriptionInput(e.target.value)}
                    />

                    <select className="form-select" aria-label="Default select example"
                            value={statusInput}
                            onChange={(e) => setStatusInput(e.target.value)}
                    >
                        {props.statuses.map(el => <option key={el._id} value={el.status}>{el.status}</option>)}
                        <option selected>Status</option>
                    </select>
                    <br/>
                    <select className="form-select" aria-label="Default select example"
                            value={priorityInput}
                        onChange={(e) => setPriorityInput(e.target.value)}
                    >
                        {props.cards.map(el => <option key={el._id} value={el}> {el}</option>)}
                        <option selected>Priority</option>
                    </select>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        onClick={createButtonHandler}
                    >
                        Create
                    </Button>
                    {' '}
                    <Button onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
            <hr/>
        </div>
    );
};

export default AddNewTask;