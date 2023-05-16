import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../Component/Card/Card";
import './Home.css';
import Loader from "../../Component/Loader/Loader";

const HomePage = () => {

    const [user, setUser] = useState(null);
    const [pokemon, setPokemon] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        getPokemon();
        getUser();
    }, [])

    const getUser = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/users/me', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('AUTH_TOKEN')}`
                }
            })
            setUser(response.data);
        } catch (error) {
            console.error(error);
            if (error.response.status === 401) {
                localStorage.removeItem('AUTH_TOKEN');
                navigate('/login');
            }
        }
    }

    const handleDisconnect = () => {
        localStorage.removeItem('AUTH_TOKEN');
        navigate('/login');
    }

    const getPokemon = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/pokemon', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('AUTH_TOKEN')}`
                }
            });
            console.log(response.data);
            setPokemon(response.data['hydra:member']);
        } catch (error) {
            console.error(error);
        }
    }

    console.log(user);

    return (
        <div>
            <div className="header-info">
                <button onClick={handleDisconnect} className="button-primary">Déconnecter</button>
                {user?.email ? (
                    <p>{user.email} is connected</p>)
                    : (
                        <p>Not connected</p>
                    )
                }
            </div>
            <h1 style={{ textAlign: 'center' }}>Pokemon List</h1>
            {!pokemon ? (
                <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" style={{
                    margin: '0 auto'
                }} alt="loading" />
            ) : (
                <div className="pokemon-grid">
                    {pokemon?.map((p, i) => (
                        <Card data={p} key={i} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default HomePage;