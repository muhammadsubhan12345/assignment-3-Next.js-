'use client';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="bg-yellow-600 p-4">
      <div className="container mx-auto flex space-x-4">
        <button
          onClick={() => router.push('/home')}
          className="text-white hover:bg-blue-500 rounded px-3 py-2 transition"
        >
          Home
        </button>
        <button
          onClick={() => router.push('/about')}
          className="text-white hover:bg-blue-500 rounded px-3 py-2 transition"
        >
          About
        </button>
        <button
          onClick={() => router.push('/contact')}
          className="text-white hover:bg-blue-500 rounded px-3 py-2 transition"
        >
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
