import React from 'react';
import DeleteModal from "./DeleteModal";

const Task = (props) => {
    return (
        <div className="card">
            <h3>{props.task.title}</h3>
            <hr/>
            <div className="card-body">
                <h5 className="card-title">{props.task.description}</h5>
                <br/>
                <p className="card-text"> Priority: {props.task.priority}</p>
                <button type="button" className="btn btn-outline-primary"
                        onClick={() => props.changePriority(props.task.id, 'up')}
                        disabled={props.task.priority >= 10}
                >Up
                </button>
                <button type="button" className="btn btn-outline-secondary"
                        disabled={props.task.priority <= 0}
                        onClick={() => props.changePriority(props.task.id, 'down')}
                >Down
                </button>

                <hr/>
                <p className="card-text"> Status: {props.task.status}</p>
                <button type="button" className="btn btn-outline-success"
                        disabled={props.statuses[0] === props.task.status}
                        onClick={() => props.changeStatuses(props.task.id, 'right')}
                >Right
                </button>
                <button type="button" className="btn btn-outline-danger"
                        disabled={props.statuses[props.statuses.length - 1] === props.task.status}
                        onClick={() => props.changeStatuses(props.task.id, 'left')}
                >Left
                </button>
                <hr/>

                <DeleteModal task={props.task}
                deleteTask={props.deleteTask}
                />
                <button type="button" className="btn btn-outline-info">Edit</button>
            </div>
        </div>
    );
};

export default Task;