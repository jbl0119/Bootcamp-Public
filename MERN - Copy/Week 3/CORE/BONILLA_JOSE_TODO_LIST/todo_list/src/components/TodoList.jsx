import React, { useState } from 'react';

const TodoList = (props) => {
    const [taskname, setTaskName] = useState(""),
    const [taskCompleted, setTaskCompleted] = useState(false),

    const createt
    
};
    
    return(
        <form onSubmit={ create}>
            <div>
                <h3>Your Form Data</h3>
                <p>First Name {firstname}</p>
                <   p>Last Name {lastname}</p>
                <   p>Email {email}</p>
                <   p>Password {password}</p>
                <   p>Confirm Password {confimrpassword}</p>
            </div>
        </form>
    );
};    

export default TodoList ;