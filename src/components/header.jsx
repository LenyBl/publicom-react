import React, { useContext } from "react";
import logo_publicom from "../img/logo_publicom.png";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { UserContext } from "../context/UserContext";

export default function Header() {
    const { user, isLoading, error } = useContext(UserContext);
    const logout = useLogout();

    document.body.style.backgroundColor = "";

    if (isLoading) {
        return (
            <header className="bg-gray-800 text-white p-4 w-screen">
                <nav>
                    <ul className="flex space-x-16 items-center">
                        <li>
                            <img src={logo_publicom} alt="logo_publicom" className="w-20 h-20" />
                        </li>
                        <li>
                            <p className="text-white">Chargement...</p>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }

    if (error) {
        return (
            <header className="bg-gray-800 text-white p-4 w-screen">
                <nav>
                    <ul className="flex space-x-16 items-center">
                        <li>
                            <img src={logo_publicom} alt="logo_publicom" className="w-20 h-20" />
                        </li>
                        <li>
                            <p className="text-red-500">Erreur : {error}</p>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }

    return (
        <header className="bg-gray-800 text-white p-4 w-screen">
            <nav>
                <ul className="flex space-x-16 items-center">
                    <li>
                        <img src={logo_publicom} alt="logo_publicom" className="w-20 h-20" />
                    </li>
                    <li>
                        <Link to="/view-message" className="hover:underline">Visualiser messages</Link>
                    </li>
                    <li>
                        <Link to="/" className="hover:underline">Liste des messages d'informations</Link>
                    </li>
                    <li>
                        <Link to="/create-message" className="hover:underline">Créer un message</Link>
                    </li>
                    {user.profile && (
                        <>
                            <li>
                                <button onClick={logout} className="hover:underline">Se déconnecter</button>
                            </li>
                            <li>
                                <p className="text-white bg-blue-800 font-semibold rounded py-1 px-3">
                                    {user.profile.PRENOMUTILISATEUR + ' ' + user.profile.NOMUTILISATEUR}
                                </p>
                            </li>
                        </>
                    )}
                    {user && !user.profile && (
                        <>
                            <li>
                                <button onClick={logout} className="hover:underline">Se déconnecter</button>
                            </li>
                            <li>
                                <p className="text-white bg-blue-800 font-semibold rounded py-1 px-3">
                                    {user.firstName + ' ' + user.lastName}
                                </p>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
}
