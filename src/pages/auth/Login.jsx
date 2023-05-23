import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from '/favicon.ico'

// Icons
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    return <div className="register flex flex-col min-h-screen rounded-lg md:p-8">
        <div className="p-8 mb-14">
            <img src={logoImage} alt="Logo" className="text-gray-100 text-3xl font-medium tracking-widest" />
        </div>
        <div className="p-8">
            <h3 className="text-gray-500 uppercase text-sm font-bold mb-2">
                Ingresa a la App
            </h3>
            <h1 className="text-6xl text-white font-medium mb-2">
                Inicia sesión<span className="text-cyan-500">.</span>
            </h1>
            <span className="text-gray-500 font-medium">
                ¿No eres usuario?{" "}
                <Link
                    to="/auth/registro" className="text-cyan-500 hover:underline">
                    Registrate
                </Link>
            </span>
            <form className="mt-8">
                <div className="max-w-lg mb-4">
                    <input
                        type="email"
                        autoComplete="off"
                        className="w-full py-3 px-4 rounded-xl outline-none bg-[#343434] text-gray-100 group"
                        placeholder="Correo electrónico"
                    />
                </div>
                <div className="max-w-lg mb-4 relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        autoComplete="off"
                        className="w-full py-3 px-4 rounded-xl outline-none bg-[#343434] text-gray-100 group"
                        placeholder="Contraseña"
                    />
                    {showPassword ? (
                        <RiEyeOffLine
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-cyan-500"
                        />
                    ) : (
                        <RiEyeLine
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-cyan-500"
                        />
                    )}
                </div>
                <div className="max-w-lg flex justify-center md:justify-end mb-6">
                    <Link
                        to="/auth/olvide-password"
                        className="text-gray-500 font-medium hover:text-gray-300 transition-colors"
                    >
                        ¿Olvidaste tu contraseña?
                    </Link>
                </div>
                <div className="max-w-lg">
                    <button className="bg-cyan-600 text-white w-full py-3 px-4 rounded-full hover:bg-cyan-700 transition-colors">
                        Iniciar sesión
                    </button>
                </div>
            </form>
        </div>
    </div>;
};
export default Login;
