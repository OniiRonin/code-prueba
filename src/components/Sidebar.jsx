import React, { useState } from "react";
import logoImage from '/favicon.ico'
import { FiCheckSquare, FiActivity, FiCalendar, FiList } from 'react-icons/fi';
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Sidebar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <div
                className={`xl:h-[100vh] fixed xl:static w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full top-0 bg-[#1a202c] p-4 flex flex-col justify-between z-50 ${showMenu ? "left-0" : "-left-full"
                    } transition-all`}
            >
                <div>
                    <div className="flex items-center justify-center mb-4">
                        <Link to="/" className="block">
                            <img src={logoImage} alt="Logo" className="h-8 w-8" />
                        </Link>
                    </div>
                    <div className="flex items-center justify-center mb-4">
                        <span className="text-xl font-bold text-gray-100">
                            Gestor de tareas
                        </span>
                    </div>
                    <nav>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <FiList className="mr-2 text-cyan-500" />
                                <Link
                                    to="/"
                                    className="block p-2 rounded-md hover:bg-gray-800 hover:text-cyan-500"
                                >
                                    Todas las tareas
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <FiActivity className="mr-2 text-cyan-500" />
                                <Link
                                    to="/"
                                    className="block p-2 rounded-md hover:bg-gray-800 hover:text-cyan-500"
                                >
                                    Tareas activas
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <FiCheckSquare className="mr-2 text-cyan-500" />
                                <Link
                                    to="/"
                                    className="block p-2 rounded-md hover:bg-gray-800 hover:text-cyan-500"
                                >
                                    Tareas completas
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <FiCalendar className="mr-2 text-cyan-500" />
                                <Link
                                    to="/"
                                    className="block p-2 rounded-md hover:bg-gray-800 hover:text-cyan-500"
                                >
                                    Calendario
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <a
                    href="https://github.com/OniiRonin"
                    className="mt-4 bg-rose-100 p-2 rounded-md text-rose-600 text-center transition hover:bg-gray-800 hover:text-cyan-500 dark:bg-slate-700/[.3] dark:text-slate-200"
                >
                    Proyecto de Jean Figueroa ®
                </a>
            </div>
            <button
                onClick={() => setShowMenu(!showMenu)}
                className="xl:hidden fixed bottom-4 right-4 bg-cyan-600 text-black p-3 rounded-full z-50"
            >
                {showMenu ? <RiCloseLine /> : <RiMenu3Line />}
            </button>
        </>
    );
};

export default Sidebar;
