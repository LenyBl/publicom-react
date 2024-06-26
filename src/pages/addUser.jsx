import {useEffect, useState} from "react";
import logo_publicom from "../img/logo_publicom.png";

export default function AddUser() {
    const API_URL = 'http://localhost:3001/api/';

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');

    const addUserSubmit = async (event) => {
        event.preventDefault();

        let username = firstName + '.' + lastName;

        const newUser = {
            IDENTIFIANTUTILISATEUR: username.toLowerCase(),
            PRENOMUTILISATEUR: firstName,
            NOMUTILISATEUR: lastName,
            MOTDEPASSEUTILISATEUR: password
        };

        try {
            const response = await fetch(API_URL + 'add-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser)
            });


            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log("User added successfully", data);


        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-full max-w-xs">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={addUserSubmit}>
                    <div className="mb-6">
                        <img src={logo_publicom} alt="logo_publicom" className="w-30 h-28 mx-auto"/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">
                            First Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="firstname"
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            autoComplete="given-name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">
                            Last Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="lastname"
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            autoComplete="family-name"
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="current-password"
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="bg-gray-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit">
                            Add User
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
