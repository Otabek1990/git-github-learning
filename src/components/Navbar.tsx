import { Link } from "react-router-dom";
import "../index.css";
function Navbar (){

    return (
        <nav className="bg-gray-900 text-white px-6 py-4">
            <div className="flex items-center justify-between">

                {/* Logo */}
                <Link className="text-2xl font-bold" to={"/"}>MyApp</Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 text-lg">
                    <li className="hover:text-blue-400 cursor-pointer">Home</li>
                    <li className="hover:text-blue-400 cursor-pointer">About</li>
                    <li className="hover:text-blue-400 cursor-pointer">Services</li>
                    <li className="hover:text-blue-400 cursor-pointer">Contact</li>
                </ul>

                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                    <Link to={'/login'}>Login</Link>
                </button>

            </div>
        </nav>
    );
};

export default Navbar;