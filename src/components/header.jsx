// eslint-disable-next-line no-unused-vars
import React from "react";
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header className="bg-gray-800 text-white p-4">
                <nav>
                    <ul className="flex space-x-4">
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