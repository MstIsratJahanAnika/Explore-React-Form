// import React from 'react';

import UseInputField from "../../Hooks/UseInputField";

const HookForm = () => {

    // using custom hook 
    const [name, nameOnChange] = UseInputField('');
    const [email, emailOnChange] = UseInputField('');
    const [password, passwordOnChange] = UseInputField('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log('submit', name, email, password);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" defaultValue={name} onChange={nameOnChange} placeholder="name"/>
                <br />
                <input type="email" defaultValue={email} onChange={emailOnChange} name="" id="" placeholder="email"/>
                <br />
                <input type="password" defaultValue={password} onChange={passwordOnChange} name="" id="" placeholder="password"/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;