import React, {useState} from 'react';
import Task from "./Task";

const Columns = (props) => {

    return (
        <div className="col">
            <h2>{props.column}</h2>

            {props.tasks.filter(el => el.status === props.column)
                .map(el =>
                    <Task
                        task={el}
                        key={el.id}
                        deleteTask={props.deleteTask}
                        changeStatuses={props.changeStatuses}
                        statuses={props.statuses}
                        changePriority={props.changePriority}
                        priorities={props.priorities}
                    />
                )}

        </div>
    );
};

export default Columns;