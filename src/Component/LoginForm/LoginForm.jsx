// Genral imports
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Input from '../Input/Input';

// Style imports
import './LoginForm.css';

const LoginForm = ({handleSubmit}) => {

    const [credentials, setCredentials] = useState({
        login: '',
        password: ''
    });

    const handleChange = ({key, value}) => {
        setCredentials((prevState) => {
            return {...prevState, [key]: value};
        });
    };

    const handleLoginChange = (event) => {
        handleChange({
            key: 'login',
            value: event.currentTarget.value
        });
    };

    const handlePasswordChange = (event) => {
        handleChange({
            key: 'password',
            value: event.currentTarget.value
        });
    };

    const handleSubmitForm = async(event) => {
        event.preventDefault();
        await handleSubmit(credentials);
    };
    //TODO Add Credentials Inputs (With Input Component)
    return (
        <>

            <form id="login-form" onSubmit={handleSubmitForm}>

                <div className='credentials-and-password-container'>

                    <Input 
                        label={'Email'} 
                        type="text" 
                        required={true} 
                        placeholder="Email" 
                        value={credentials.login} 
                        handleChange={handleLoginChange}
                    />
                    <Input 
                        label={'Password'} 
                        type="password" 
                        required={true} 
                        placeholder="Password" 
                        value={credentials.password} 
                        handleChange={handlePasswordChange}
                    />
                    <button
                        className='login-page-call-to-action'
                        type="submit"
                        onClick={handleSubmitForm}
                    >
                        Submit
                    </button>

                </div>
            </form>
        </>
    );
};

export default LoginForm;
