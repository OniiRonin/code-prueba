import React from "react";
import logoImage from '/favicon.ico'
import { Link } from "react-router-dom";


const ForgetPassword = () => {
    return (
        <div className="register flex flex-col min-h-screen rounded-lg md:p-8">
            <div className="p-8 mb-14">
                <img src={logoImage} alt="Logo" className="text-gray-100 text-3xl font-medium tracking-widest" />
            </div>
            <div className="p-8">
                <h1 className="text-gray-500 uppercase text-sm font-bold mb-2">
                    Recuperar <span className="text-cyan-500">Contraseña</span>
                </h1>
                <form className="mt-8">
                    <div className="max-w-lg mb-4 flex flex-col md:flex-row items-center justify-between gap-4">
                        <input
                            type="email"
                            className="w-full py-3 px-4 rounded-xl outline-none bg-[#343434] text-gray-100 group"
                            placeholder="Correo electrónico"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="bg-cyan-600 text-white w-full py-3 px-4 rounded-full hover:bg-cyan-700 transition-colors max-w-lg mb-4"
                        >
                            Enviar instrucciones
                        </button>
                    </div>
                </form>
                <div className="max-w-lg mb-4">
                    <div className="flex justify-center md:justify-end mb-2">
                        <span className="text-gray-500">¿Ya tienes cuenta? </span>
                        <Link
                            to="/auth"
                            className="text-cyan-500 hover:text-gray-100 transition-colors"
                        >
                            Ingresa
                        </Link>
                    </div>
                    <div className="flex justify-center md:justify-end">
                        <span className="text-gray-500">¿No tienes cuenta? </span>
                        <Link
                            to="/auth/registro"
                            className="text-cyan-500 hover:text-gray-100 transition-colors"
                        >
                            Regístrate
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;
