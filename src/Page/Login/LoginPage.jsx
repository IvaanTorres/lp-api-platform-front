import LoginForm from "../../Component/LoginForm/LoginForm";
import {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {

    const [ formSubmitting, setFormSubmitting ] = useState(false);
    const navigate = useNavigate();
    
    const handleSubmit = async (credentials) => {
        setFormSubmitting(true);
        try {
            //TODO Make Login call
            const response = await axios.post('http://localhost:8000/api/login', {
                email: credentials.login,
                password: credentials.password
            })
            localStorage.setItem('AUTH_TOKEN', response.data.token);
            const authToken = localStorage.getItem('AUTH_TOKEN');
            if(authToken){  
                navigate('/home');
            }
        } catch (error) {
            console.log(error);
            // message
        } finally {
            setFormSubmitting(false);
        }
    };

    return(
        <div>
            <LoginForm
                handleSubmit={handleSubmit}
            />

        </div>
    )
}

export default LoginPage;