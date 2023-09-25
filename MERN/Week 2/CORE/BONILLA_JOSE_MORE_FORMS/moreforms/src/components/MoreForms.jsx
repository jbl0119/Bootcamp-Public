import React, { useState } from  'react';
    
const MoreForms = (props) => {
    const [firstName, setfirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confimrpassword, setConfirmpassword] = useState(""); 
    const [firstNameValidation, setfirstNameValidation] = useState("");
    const [LastNameValidation, setLastNameValidation] = useState("");
    const [emailValidation, setEmailValidation] = useState("");
    const [passwordValidation, setPasswordValidation] = useState("");
    const[hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    
    const createUser = (e) => {
        
        e.preventDefault();
        
        const newUser = { firstName, LastName , email,  password,confimrpassword };

        console.log("Welcome", newUser);

        // resets the form to blank values after submitting the form
        setfirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmpassword("");
        // when form is submitted will display true value. 
        setHasBeenSubmitted(true);
    };
     // form validations
    const firstNameVal = (e) => {
        setfirstName(e.target.value);
        if(e.target.value.length < 1) {
            setfirstNameValidation("First name is required!");
        } else if(e.target.value.length < 2) {
            setfirstNameValidation("First name must be at least 2 characters!");
        } else {
            // an empty string is considered a "falsy" value
            setfirstNameValidation("");
        }
    };
    const lastNameVal = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 2) {
            setLastNameValidation("Last name must be at least 2 characters!");
        } else {
            // an empty string is considered a "falsy" value
            setLastNameValidation("");
        }
    };
    const emailVal = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 2) {
            setEmailValidation("Email must be at least 2 characters!");
        } else {
            // an empty string is considered a "falsy" value
            setEmailValidation("");
        }
    };
    const passwordVal = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPasswordValidation("First name must be at least 2 characters!");
        }else {
            // an empty string is considered a "falsy" value
            setfirstNameValidation("");
        }
    };
    return(
        <form onSubmit={ createUser }>
            {
                hasBeenSubmitted ?
                <h3>Thanks for signing up!</h3>:
                <h3>Please submit the form!</h3>
            }
            <div>
                <label>First Name: </label>
                <input type="text" onChange={  firstNameVal } value={firstName} />
                    {
                        firstNameValidation?
                        <p>{firstNameValidation}</p>:""
                    }
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={ lastNameVal } value={LastName}/>
                {
                        LastNameValidation?
                        <p>{LastNameValidation}</p>:""
                    }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ emailVal } value={email} />
                {
                        emailValidation?
                        <p>{emailValidation}</p>:""
                    }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ passwordVal } value={password} />
                {
                        passwordValidation?
                        <p>{passwordValidation}</p>:""
                    }
            </div>
            <div>
            <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => setConfirmpassword(e.target.value) } value={confimrpassword} />
                {
                    confimrpassword != password ? 
                    <span style={{color:"red"}}>*The passwords do not match</span>: ""
                }
            </div>

                <input type="submit" value="Create User" />

            <div>
                <h3>Your Form Data</h3>
                <p>First Name {firstName}</p>
                <   p>Last Name {LastName}</p>
                <   p>Email {email}</p>
                <   p>Password {password}</p>
                <   p>Confirm Password </p>
            </div>
        </form>
    );
    };

export default MoreForms;
