// import React from 'react';

import { useState } from "react";

const ControlledField = () => {

    // proti ta field handle er jonno ek ek ta state declare kora hocche 

    const[name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const[error, setError]= useState('');
    const handleSubmit = e=>{
        e.preventDefault();

        console.log(name ,email, password);

        // submit korar por warning

        // if(password.length < 8){
        //     setError('6 digit password is needed');
        // }
        // else{
        //     setError('');
        // }

    }

    // letter wise error dekhabe condition fill na hole 
    const handlePasswordOnchange =(e)=>{
        console.log(e.target.value);

    //     // new password set
        setPassword(e.target.value);

        // likhte thakle warming
        if(password.length < 8){
            setError('Password should contain 8 characters');
        }
        else{
            setError('');
        }
    }

    const handleNameOnChange= (e) =>{
        setName(e.target.value)
    }

    // email field er jonno 
    const handleEmailOnChange=(e)=>{
        setEmail(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleNameOnChange} defaultValue={name} placeholder="Name"/>
                <br />
                <input type="email" name="email" onChange={handleEmailOnChange} defaultValue={email} placeholder="Email" id="" required/>
                <br />
                <input type="password" name="password" onChange={handlePasswordOnchange} defaultValue={password} placeholder="Password" id="" required/>
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{color: 'red'}}><small>{error}</small></p>
        </div>
    );
};

export default ControlledField;