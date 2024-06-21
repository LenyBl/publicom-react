// eslint-disable-next-line no-unused-vars
import React from "react";
import logo_publicom from "../img/logo_publicom.png";
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header className="bg-gray-800 text-white p-4">
            <nav>
                <ul className="flex space-x-4 items-center">
                    <li>
                        <img src={logo_publicom} alt="logo_publicom" className="w-20 h-20"/>
                    </li>
                    <li>
                        <Link to="/" className="hover:underline">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:underline">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
