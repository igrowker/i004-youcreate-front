import React from 'react';

type LoginType = {
    email: string;
    password: string;
}

export const Login: React.FC = () => {
    const [loginData, setLoginData] = React.useState<LoginType>({
        email: '',
        password: ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({
            ...loginData,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(loginData);
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-300">
            <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-black text-white flex items-center justify-center rounded-full">
                        LOGO
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            name="password"
                            type="password"
                            placeholder="Contraseña"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full p-3 text-white bg-gray-800 rounded-lg"
                    >
                        Iniciar sesión
                    </button>
                </form>
                <p className="text-center text-sm">
                    ¿No tenés una cuenta?{' '}
                    <a href="#" className="text-blue-500 underline">
                        Registrate acá
                    </a>
                </p>
                <div className="flex items-center justify-center my-4">
                    <span className="w-full border-t border-gray-300"></span>
                    <span className="px-2 text-gray-500">o</span>
                    <span className="w-full border-t border-gray-300"></span>
                </div>
                <button
                    type="button"
                    className="flex items-center justify-center w-full p-3 mb-2 text-gray-800 bg-white border border-gray-300 rounded-lg"
                >
                    <img src="/path-to-google-icon.png" alt="Google" className="w-5 h-5 mr-2" />
                    Continuar con Google
                </button>
                <button
                    type="button"
                    className="flex items-center justify-center w-full p-3 text-gray-800 bg-white border border-gray-300 rounded-lg"
                >
                    <img src="/path-to-apple-icon.png" alt="Apple" className="w-5 h-5 mr-2" />
                    Continuar con Apple
                </button>
            </div>
        </div>
    );
};