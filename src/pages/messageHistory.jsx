import React from "react";
import icon_picture from "../img/icon_picture.png";

export default function MessageHistory() {

    return (
        <div>
            <div className="flex justify-center items-center my-10">
                <h1 className="text-4xl font-bold">Liste des messages</h1>
            </div>
            <div className="flex justify-center">
                <div className="relative overflow-x-auto shadow-2xl sm:rounded-lg border-black">
                    <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead
                            className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center bg-red-600 rounded p-2 text-white hover:scale-105">
                                    <button>Supprimer</button>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Dernier titre
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Dernier message
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Dernière image
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Dernière police
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Dernière couleur de police
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Modifié par
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
                                ancien titre message
                            </th>
                            <td className="px-6 py-4">
                                ancien message
                            </td>
                            <td className="px-6 py-4 flex justify-center items-center">
                                <img src={icon_picture
                                } className="w-7 h-7 hover:scale-105"/>
                            </td>
                            <td className="px-6 py-4">
                                ancienne police
                            </td>
                            <td className="px-6 py-4">
                                ancienne couleur de police
                            </td>
                            <td className="px-6 py-4">
                                admin
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}