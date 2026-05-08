import { useRef } from 'react';

const UncontrolledField = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleFormSubmit=(e)=>{
        e.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value
        console.log(email, password);
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input ref={emailRef} type="email" name="" id="" />
                <br />
                <input ref={passwordRef} type="password" name="" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UncontrolledField;