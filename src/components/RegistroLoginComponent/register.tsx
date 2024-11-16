import React, { useState } from 'react';

export const Register: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        country: '',
        phoneCode: '',
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
        youtubeUser: '',
        twitchUser: '',
        youtubeChecked: false,
        twitchChecked: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        if (e.target instanceof HTMLInputElement && type === 'checkbox') {
            setFormData(prevData => ({
                ...prevData,
                [name]: (e.target as HTMLInputElement).checked,
            }));
        } else {
            setFormData(prevData => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };




    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-4">
            <form onSubmit={handleSubmit} className="bg-gray-300 p-6 rounded-lg shadow-md w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold">Crear una cuenta</h2>
                    <span>Paso 1 de 2</span>
                </div>
                <div className="flex justify-center space-x-4 mb-4">
                    <button type="button" className="p-2 rounded-full bg-white shadow-md">
                        <span role="img" aria-label="Google">G</span>
                    </button>
                    <button type="button" className="p-2 rounded-full bg-white shadow-md">
                        <span role="img" aria-label="Apple"></span>
                    </button>
                </div>

                <h3 className="text-sm font-semibold mb-2">Tus datos</h3>

                <input type="text" name="firstName" placeholder="Nombre" value={formData.firstName} onChange={handleChange} className="mb-2 p-2 border rounded w-full" />
                <input type="text" name="lastName" placeholder="Apellido" value={formData.lastName} onChange={handleChange} className="mb-2 p-2 border rounded w-full" />

                <select name="country" value={formData.country} onChange={handleChange} className="mb-2 p-2 border rounded w-full">
                    <option value="">País</option>
                    <option value="MX">México</option>
                    <option value="US">Estados Unidos</option>
                    <option value="ES">España</option>
                </select>

                <div className="flex space-x-2 mb-2">
                    <select name="phoneCode" value={formData.phoneCode} onChange={handleChange} className="p-2 border rounded w-1/3">
                        <option value="">Código</option>
                        <option value="+52">+52</option>
                        <option value="+1">+1</option>
                        <option value="+34">+34</option>
                    </select>
                    <input type="text" name="phoneNumber" placeholder="Número de teléfono" value={formData.phoneNumber} onChange={handleChange} className="p-2 border rounded w-2/3" />
                </div>

                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="mb-2 p-2 border rounded w-full" />
                <input type="password" name="password" placeholder="Contraseña *" value={formData.password} onChange={handleChange} className="mb-2 p-2 border rounded w-full" />
                <input type="password" name="confirmPassword" placeholder="Confirmar contraseña *" value={formData.confirmPassword} onChange={handleChange} className="mb-2 p-2 border rounded w-full" />

                <h3 className="text-sm font-semibold mt-4 mb-2">¿Dónde estás creando contenido?</h3>
                <div className="flex items-center mb-2">
                    <input type="checkbox" name="youtubeChecked" checked={formData.youtubeChecked} onChange={handleChange} className="mr-2" />
                    <label className="mr-2">YouTube</label>
                    <input type="text" name="youtubeUser" placeholder="@tu_usuario" value={formData.youtubeUser} onChange={handleChange} className="p-2 border rounded w-full" disabled={!formData.youtubeChecked} />
                </div>
                <div className="flex items-center mb-4">
                    <input type="checkbox" name="twitchChecked" checked={formData.twitchChecked} onChange={handleChange} className="mr-2" />
                    <label className="mr-2">Twitch</label>
                    <input type="text" name="twitchUser" placeholder="@tu_usuario" value={formData.twitchUser} onChange={handleChange} className="p-2 border rounded w-full" disabled={!formData.twitchChecked} />
                </div>

                <button type="submit" className="bg-gray-800 text-white p-2 rounded w-full">Continuar</button>
            </form>
        </div>
    );
};

