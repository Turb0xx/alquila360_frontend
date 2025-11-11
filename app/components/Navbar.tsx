export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-8 py-4 shadow-sm bg-white">
      <h1 className="text-2xl font-bold">Alquila360</h1>

      <nav className="flex gap-6 text-gray-600">
        <a href="#">Find Properties</a>
        <a href="#">Support</a>
      </nav>

      <a
        href="/login"
        className="px-4 py-2 border rounded-md hover:bg-gray-100 transition"
      >
        Log in
      </a>
    </header>
  );
}

