import React, {useState, useEffect} from 'react';
import {getAllUsers} from '../services/userService';
import icon_picture from "../img/icon_picture.png";

export default function Home() {

    /* const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const data = await getAllUsers();
                setUsers(data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching users:', error);
                setError(error);
                setIsLoading(false);
            }
        }

        fetchUsers();
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    if (!Array.isArray(users) || users.length === 0) {
        return <p>No users found</p>;
    } */


    return (<div>
        <div className="flex justify-center items-center my-10">
            <h1 className="text-4xl font-bold">Liste des messages</h1>
        </div>
        <div className="flex justify-center">
            <div className="relative overflow-x-auto shadow-2xl sm:rounded-lg border-black">
                <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="p-4">
                            <div className="flex items-center bg-red-600 rounded p-2 text-white hover:scale-105">
                                <button>Supprimer</button>
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Titre
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Message
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Image
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Statut
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Créateur
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Modifier
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Historique
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="w-4 p-4">
                            <div className="flex justify-center items-center">
                                <input id="checkbox-table-1" type="checkbox"
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="checkbox-table-1" className="sr-only">checkbox</label>
                            </div>
                        </td>
                        <th scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            titre message
                        </th>
                        <td className="px-6 py-4">
                            message
                        </td>
                        <td className="px-6 py-4 flex justify-center items-center">
                            <img src={icon_picture} className="w-7 h-7 hover:scale-105"/>
                        </td>
                        <td className="px-6 py-4">
                            19/11/2004
                        </td>
                        <td className="px-6 py-4">
                            <span
                                className="text-green-600 bg-green-200 font-semibold rounded-full py-1 px-3">Active</span>
                        </td>
                        <td className="px-6 py-4">
                            <span className="text-gray-800 dark:text-gray-200">Admin</span>
                        </td>
                        <td className="px-6 py-4">
                            <a href="/edit-message"
                               className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> 
                        </td>
                        <td className="px-6 py-4">
                            <a href="/message-history"
                               className="font-medium text-blue-600 dark:text-blue-500 hover:underline">History</a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>)
        ;
}
