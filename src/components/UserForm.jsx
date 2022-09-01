import React, { useState } from  'react';

const UserForm = (props) => {
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_ps, setConfirmPs] = useState("");
    const [first_nameError, setFirstNameError] = useState("");  
    const [last_nameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirm_psError, setConfirmPasswordError] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { first_name, last_name, email, password, confirm_ps };
        console.log("Welcome", newUser);
        setFirstName(""); setLastName(""); setEmail(""); setPassword(""); setConfirmPs("");
    };

    const handleFirstNameError = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 2) {
            setFirstNameError("First name must be at least 2 characters long")
        } else {
            setFirstNameError("")
        }
    }

    const handleLastNameError = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 2) {
            setLastNameError("Last name must be at least 2 characters long")
        } else {
            setLastNameError("")
        }
    }

    const handleEmailError = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters long")
        } else {
            setEmailError("")
        }
    }

    const handlePasswordError = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters long")
        }
        else {
            setPasswordError("")
        }
    }

    const handleMatchError = (e) => {
        setConfirmPs(e.target.value);
        if (password !== e.target.value) {
            setConfirmPasswordError("Passwords must match!")
        } else {
            setConfirmPasswordError("")
        }
    }

    return(
        <div>
            <form onSubmit={ createUser }>
                <div className='container'>
                    <div className='box'>
                        <label>First Name: </label> 
                        <input type="text" onChange={handleFirstNameError} value={ first_name } placeholder={'First Name...'}/>
                    </div>
                    {
                        first_nameError ? <p style={{color: 'red', margin:'.3rem' }}>{first_nameError}</p> : ""
                    }
                    <div className='box'>
                        <label>Last Name: </label> 
                        <input type="text" onChange={handleLastNameError} value={ last_name } placeholder={'Last Name...'}/>
                    </div>
                    {
                        last_nameError ? <p style={{color: 'red', margin:'.3rem' }}>{last_nameError}</p> : ""
                    }
                    <div className='box'>
                        <label>Email Address: </label> 
                        <input type="text" onChange={handleEmailError} value={ email } placeholder={'Email...'}/>
                    </div>
                    {
                        emailError ? <p style={{color: 'red', margin:'.3rem' }}>{emailError}</p> : ""
                    }
                    <div className='box'>
                        <label>Password: </label>
                        <input type="text" onChange={handlePasswordError} value={ password } placeholder={'Password...'}/>
                    </div>
                    {
                        passwordError ? <p style={{color: 'red', margin:'.3rem' }}>{passwordError}</p> : ""
                    }
                    <div className='box'>
                        <label>Confirm Password: </label>
                        <input type="text" onChange={handleMatchError} value={ confirm_ps } placeholder={'Confirm Password...'}/>
                    </div>
                    {
                        confirm_psError ? <p style={{color: 'red', margin:'.3rem' }}>{confirm_psError}</p> : ""
                    }
                    <input id="btn" type="submit" value="Create User" />
                </div>
            </form>
        </div>
    );
};

export default UserForm;