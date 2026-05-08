// import React from 'react';

import { useState } from "react";

const ControlledField = () => {

    const [password, setPassword] = useState('');

    const[error, setError]= useState('');
    const handleSubmit = e=>{
        e.preventDefault();
        console.log('submitted');

        if(password.length < 8){
            setError('6 digit password is needed');
        }
        else{
            setError('');
        }

    }

    // letter wise error dekhabe condition fill na hole 
    const handlePasswordOnchange =(e)=>{
        console.log(e.target.value);

    //     // new password set
        setPassword(e.target.value);

    //     if(password.length < 8){
    //         setError('Password should contain 8 characters');
    //     }
    //     else{
    //         setError('');
    //     }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" id="" required/>
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