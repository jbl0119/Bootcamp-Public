import React, { useState } from 'react';

const TodoList = (props) => {
    
};
    
    return(
        <form onSubmit={ createUser }>
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