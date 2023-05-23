import React from "react";
import { RiArrowDownSLine, RiSettings3Line, RiLogoutCircleRLine } from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";

const Header = () => {
    return (
        <header className="h-[7vh] md:h-[10vh] border-b border-secondary-100 p-8 flex items-center justify-between">
            <DarkMode />
            <nav className="flex items-center gap-2">
                <Menu
                    menuButton={
                        <MenuButton className="flex items-center gap-x-2 hover:bg-secondary-100 p-2 rounded-lg transition-colors">
                            <img
                                src="https://img.freepik.com/foto-gratis/feliz-optimista-guapo-gerente-ventas-latina-apuntando-lado-mirando-camara_1262-12679.jpg"
                                className="w-6 h-6 object-cover rounded-full text-gray-100"
                                alt="Profile"
                            />
                            <RiArrowDownSLine className="text-cyan-500" />
                        </MenuButton>
                    }
                    align="end"
                    arrow
                    arrowClassName="bg-secondary-100"
                    transition
                    menuClassName="bg-secondary-100 p-4"
                >
                    <MenuItem className="p-0 hover:bg-transparent">
                        <Link
                            to="/perfil"
                            className="rounded-lg transition-colors text-gray-100 hover:text-gray-100 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
                        >
                            <img
                                src="https://img.freepik.com/foto-gratis/feliz-optimista-guapo-gerente-ventas-latina-apuntando-lado-mirando-camara_1262-12679.jpg"
                                className="w-8 h-8 object-cover rounded-full text-gray-100"
                                alt="Profile"
                            />
                            <div className="flex flex-col text-sm">
                                <span className="text-sm">Jean Figueroa</span>
                                <span className="text-xs text-gray-500">admin@gmail.com</span>
                            </div>
                        </Link>
                    </MenuItem>
                    <hr className="my-4 border-gray-500" />
                    <MenuItem className="p-0 hover:bg-transparent">
                        <Link
                            to="/configuracion"
                            className="rounded-lg transition-colors text-gray-300 hover:text-gray-100 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
                        >
                            <RiSettings3Line className="text-cyan-500" /> Configuración
                        </Link>
                    </MenuItem>
                    <MenuItem className="p-0 hover:bg-transparent">
                        <Link
                            to="/cerrar-sesion"
                            className="rounded-lg transition-colors text-gray-300 hover:text-gray-100 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
                        >
                            <RiLogoutCircleRLine className="text-cyan-500" /> Cerrar sesión
                        </Link>
                    </MenuItem>
                </Menu>
            </nav>
        </header>
    );
};

export default Header;