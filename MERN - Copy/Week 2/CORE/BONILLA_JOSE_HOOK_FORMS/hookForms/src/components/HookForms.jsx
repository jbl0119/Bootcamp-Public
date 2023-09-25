import React, { useState } from  'react';
    
const HookForms = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confimrpassword, setConfirmpassword] = useState("");    
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        // shorthand ES6 syntax
        const newUser = { firstname, lastname , email,  password,confimrpassword };
        console.log("Welcome", newUser);
        // reset the form to blank values after submitting the form
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setConfirmpassword("");
    };
    
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={ (e) => setFirstname(e.target.value) } value={firstname} />
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={ (e) => setLastname(e.target.value) } value={lastname}/>
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } value={email} />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } value={password} />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => setConfirmpassword(e.target.value) } value={confimrpassword} />
            </div>
            <input type="submit" value="Create User" />
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

export default HookForms;
