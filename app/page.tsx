import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  const categorias = [
    { icon: "🏠", label: "Departamentos" },
    { icon: "🏡", label: "Casas" },
    { icon: "🌴", label: "Vacacional" },
    { icon: "🏢", label: "Condominios" },
    { icon: "🏬", label: "Comercial" },
    { icon: "🛏️", label: "Habitaciones" },
    { icon: "📍", label: "Ubicaciones" },
    { icon: "👨‍👩‍👧", label: "Familiar" },
  ];

   return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative w-full h-[520px] flex items-center justify-center">
        <Image
          src="/hero.png"      // <- ahora PNG en /public
          alt="Fondo del hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center text-white px-6 max-w-5xl w-full">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Experimente el alquiler de propiedades sin problemas.
          </h1>

          <div className="mt-6 mx-auto flex w-full max-w-3xl">
            <input
              type="text"
              placeholder="Buscar propiedad"
              className="flex-1 px-6 py-3 rounded-l-full border border-white/20 outline-none text-black"
            />
            <button
              type="button"
              className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-r-full font-semibold"
            >
              Buscar
            </button>
          </div>

          <p className="mt-4 text-base md:text-lg tracking-wide">
            Descubre casas, departamentos y mucho más a precios inmejorables.
          </p>
        </div>
      </section>  

      {/* CATEGORÍAS */}
      <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-6 md:p-10">
        {categorias.map((c) => (
          <button
            key={c.label}
            className="flex flex-col items-center justify-center bg-white rounded-2xl shadow hover:shadow-lg transition py-6"
            type="button"
          >
            <span className="text-4xl">{c.icon}</span>
            <span className="mt-2 text-lg font-medium">{c.label}</span>
          </button>
        ))}
      </section>
    </>
  );
}

