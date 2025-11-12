"use client";

import { useState } from "react";
import Image from "next/image";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  // Función para manejar el login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Both fields are required");
      return;
    }

    // Aquí se haría una petición al backend para verificar las credenciales
    console.log("Email:", email);
    console.log("Password:", password);
    setError(null); // Limpiar el error si la validación es exitosa

    // Simular el login
    alert("Logged in exitoso");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        {/* Título */}
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
          Bienvenido De Vuelta
        </h2>

        {/* Mostrar error si existe */}
        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        {/* Formulario */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingresa tu  email"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingrsa tu  password"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 mt-4"
          >
            Log In
          </button>
        </form>

        {/* Imagen a la derecha */}
        <div className="mt-6">
          <Image
  src="/login.png"
  alt="Login Image"
  width={500}
  height={300}
  className="rounded-lg"
/>

        </div>
      </div>
    </div>
  );
}
