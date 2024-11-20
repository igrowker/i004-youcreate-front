import React, { useState } from "react";

export  const Login1: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Iniciando sesión con:", { email, password, rememberMe });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md overflow-hidden">

                <div className="relative">
                    <img
                        src="https://via.placeholder.com/600x200"
                        alt="Fondo"
                        className="w-full h-40 object-cover"
                    />
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-4xl text-gray-600">👤</span>
                    </div>
                </div>


                <div className="p-6">
                    <h2 className="text-center text-xl font-semibold">
                        Bienvenido de nuevo, <span className="font-bold">Matias!</span>
                    </h2>

                    <form onSubmit={handleLogin} className="mt-6 space-y-4">

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Correo Electrónico
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Correo Electrónico"
                                className="w-full mt-1 px-3 py-2 border rounded shadow-sm focus:ring-gray-300 focus:border-gray-400"
                                required
                            />
                        </div>


                        <div className="relative">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Contraseña
                            </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Contraseña *"
                                className="w-full mt-1 px-3 py-2 border rounded shadow-sm focus:ring-gray-300 focus:border-gray-400"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute top-9 right-3 text-gray-500"
                            >
                                {showPassword ? "🙈" : "👁️"}
                            </button>
                        </div>


                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="mr-2"
                                />
                                Recordarme
                            </label>
                            <a href="#" className="text-gray-500">
                                ¿Has olvidado la contraseña?
                            </a>
                        </div>


                        <button
                            type="submit"
                            className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-900 transition"
                        >
                            INICIAR SESIÓN
                        </button>
                    </form>


                    <div className="mt-6">
                        <div className="flex items-center justify-center space-x-2">
                            <hr className="w-1/3 border-gray-300" />
                            <span className="text-sm text-gray-500">o continuar con</span>
                            <hr className="w-1/3 border-gray-300" />
                        </div>
                        <div className="flex justify-center space-x-4 mt-4">
                            <button className="p-2 bg-gray-200 rounded-full">
                                <span className="text-gray-600 text-lg">📘</span>
                            </button>
                            <button className="p-2 bg-gray-200 rounded-full">
                                <span className="text-gray-600 text-lg">🅖</span>
                            </button>
                        </div>
                    </div>

                    <p className="mt-6 text-center text-sm text-gray-500">
                        ¿No tenés una cuenta?{" "}
                        <a href="#" className="text-gray-800 underline font-medium">
                            Registrate acá
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};


