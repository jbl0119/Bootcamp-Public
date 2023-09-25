import React from 'react'

const TasksDisplay = () => {
    return (
        <>
            <h1>Tasks</h1>
            <pre>{ props.task }</pre>
        </>
    );
};

export default TasksDisplay