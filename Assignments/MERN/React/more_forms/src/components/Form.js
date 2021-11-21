import React, { useState } from "react";

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [fNameError, setFNameError] = useState("");
    const [lNameError, setLNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confPassError, setConfPassError] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const handleFName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFNameError("First Name is required!");
        } else if(e.target.value.length < 2) {
            setFNameError("First Name must be 2 characters or longer!");
        } else {
            setFNameError("");
        }
    }

    const handleLName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLNameError("Last Name is required!");
        } else if(e.target.value.length < 2) {
            setLNameError("Last Name must be 2 characters or longer!");
        } else {
            setLNameError("");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if(e.target.value.length < 5) {
            setEmailError("Email must be 5 characters or longer!");
        } else {
            setEmailError("");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } else if(e.target.value.length < 8) {
            setPasswordError("Password must be 8 characters or longer!");
        } else {
            setPasswordError("");
        }
    }
    const handleConfPassword = (e) => {
        setConfPassword(e.target.value);
        if(e.target.value !== password) {
            setConfPassError("Passwords must match!");
        } else {
            setConfPassError("");
        }
    }


    const createUser = (e) => {
        e.preventDefault();

        const newUser = { firstName, lastName, email, password, confPassword };
        console.log(newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfPassword("");
        setHasBeenSubmitted(true);
        

    };

    return (
        <div>
            { hasBeenSubmitted ?
            <div>
            <h3>Thank you for submitting the form!</h3>
            </div>: 
            <div>
                <h3>Welcome, please submit the form.</h3> 
            
                <form onSubmit={createUser}>
                
                
                    <div>
                        <label>First Name: </label>
                        <input
                            type="text"
                            value={firstName}
                            onChange={ handleFName }
                        />
                        {
                        fNameError ?
                        <p>{ fNameError }</p> :
                        ''
                    }
                    </div>
                    <div>
                        <label>Last Name: </label>
                        <input
                            type="text"
                            value={lastName}
                            onChange={ handleLName }
                        />
                        {
                        lNameError ?
                        <p>{ lNameError }</p> :
                        ''
                    }
                    </div>
                    <div>
                        <label>Email Address: </label>
                        <input
                            type="text"
                            value={email}
                            onChange={ handleEmail}
                        />
                        {
                        emailError ?
                        <p>{ emailError }</p> :
                        ''
                    }
                    </div>
                    <div>
                        <label>Password: </label>
                        <input
                            type="password"
                            value={password}
                            onChange={ handlePassword }
                        />
                        {
                        passwordError ?
                        <p>{ passwordError }</p> :
                        ''
                    }
                    </div>
                    <div>
                        <label>Confirm Password: </label>
                        <input
                            type="password"
                            value={confPassword}
                            onChange={ handleConfPassword }
                        />
                        {
                        confPassError ?
                        <p>{ confPassError }</p> :
                        ''
                    }
                    </div>
                    {
                    fNameError || lNameError || emailError || passwordError || passwordError || confPassError ?
                    <input type="submit" value="Create User" disabled /> : 
                    <input type="submit" value="Create User" />
                }
                </form>
            </div>
            }
            <div>
                <h2>First Name: {firstName}</h2>
                <h2>Last Name: {lastName}</h2>
                <h2>Email: {email}</h2>
                <h2>Password: {password}</h2>
                <h2>Confirm: {confPassword}</h2>
            </div>
        </div>
    );
};

export default Form;
