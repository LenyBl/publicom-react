// eslint-disable-next-line no-unused-vars
import React from "react";
import logo_publicom from "../img/logo_publicom.png";
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header className="bg-gray-800 text-white p-4 w-screen">
            <nav>
                <ul className="flex space-x-16 items-center">
                    <li>
                        <img src={logo_publicom} alt="logo_publicom" className="w-20 h-20"/>
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
                </ul>
            </nav>
        </header>
    );
}
