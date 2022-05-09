import Columns from "./Columns";
import {useState} from "react";
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import AddNewTask from "./AddNewTask";

function App() {

    const initialTask = [
        {
            id: Math.random(),
            title: 'First task',
            description: 'Learn JS',
            status: 'Todo',
            priority: 1
        },
        {
            id: Math.random(),
            title: 'Second task',
            description: 'Learn CSS',
            status: 'Progress',
            priority: 2
        },
        {
            id: Math.random(),
            title: 'Next task',
            description: 'Learn React',
            status: 'Review',
            priority: 3
        },
        {
            id: Math.random(),
            title: 'Good task',
            description: 'Learn Redux',
            status: 'Done',
            priority: 4
        }
    ]

    const statuses = ['Todo', 'Progress', 'Review', 'Done'];
    const priorities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const [tasks, setTasks] = useState(initialTask);


    const deleteTask = (id) => {
        const remove = tasks.filter(el => el.id !== id);
        setTasks(remove)
    }

    const changeStatuses = (id, direction) => {
        const newStatus = tasks.map(el => {
            if (el.id === id) {
                if (direction === 'right') el.status = statuses[statuses.indexOf(el.status) - 1];
                if (direction === 'left') el.status = statuses[statuses.indexOf(el.status) + 1];
            }
            return el;
        })
        setTasks(newStatus)
    }

    const changePriority = (id, direction) => {
        const newPriority = tasks.map(el => {
            if (el.id === id) {
                if (direction === 'up') el.priority = priorities[priorities.indexOf(el.priority) + 1];
                if (direction === 'down') el.priority = priorities[priorities.indexOf(el.priority) - 1];
            }
            return el;
        })
        setTasks(newPriority)
    }
    return (
        <div className="container">
            <h1>Kanban Board</h1>

            <AddNewTask/>

            <div className="row">
                {statuses.map(el => <Columns column={el}
                                             key={el.id}
                                             tasks={tasks}
                                             deleteTask={deleteTask}
                                             changeStatuses={changeStatuses}
                                             statuses={statuses}
                                             changePriority={changePriority}
                                             priorities={priorities}
                    />
                )}
            </div>
        </div>
    );
}

export default App;
