import React, {useState, useContext, useEffect} from "react";
import logo_publicom from "../img/logo_publicom.png";
import {useNavigate} from "react-router-dom";
import {UserContext} from "../context/UserContext";
import {login} from "../services/authService.jsx";


export default function Login() {


    document.body.style.backgroundColor = "#1F2937";

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const {setUser} = useContext(UserContext);
    const navigate = useNavigate();

    const user = {
        IDENTIFIANTUTILISATEUR: username,
        MOTDEPASSEUTILISATEUR: password
    };

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const profile = await login(user);
            setUser({profile});
            navigate("/");
        } catch (error) {
            console.error("Error logging in:", error);
            setError("Error logging in");
        }
    }

    return (<div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <div className="mb-6">
                    <img src={logo_publicom} alt="logo_publicom" className="w-30 h-28 mx-auto"/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">
                        Username
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="firstname"
                        type="text"
                        placeholder="Username"
                        autoComplete="given-name"
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="******************"
                        autoComplete="current-password"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button
                        className="bg-gray-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit">
                        Login
                    </button>
                </div>
            </form>
        </div>
    </div>);
}