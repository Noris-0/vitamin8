import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Store";

const TaskForm = () => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(task.trim()) {
            dispatch(addTask(task));
            setTask('');


        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-3">
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Add a new task..."
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button type="submit" className="btn btn-primary">Add Task</button>
            </div>
        </form>
    );
};

export default TaskForm;