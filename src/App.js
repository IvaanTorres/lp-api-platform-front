import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Page/Home/Home';
import LoginPage from './Page/Login/LoginPage';
// import Router from './Router';

export function RequireAuth({ children }) {
    // Used to ensure the refreshToken is called once at a time
    const userToken = localStorage.getItem('AUTH_TOKEN') // TODO Get user from local storage

    if (userToken === null) {
        return <Navigate to="/login" replace={true} />
    } else {
        return children;
    }
}

function App() {

//Navigation dans requireAuth
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/home" element={
                <RequireAuth>
                    <HomePage />
                </RequireAuth>
            } />
        </Routes>
    </BrowserRouter>
    );
}

export default App;
