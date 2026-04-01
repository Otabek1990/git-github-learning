import "../index.css";
function Navbar (){

    return (
        <nav className="bg-gray-900 text-white px-6 py-4">
            <div className="flex items-center justify-between">

                {/* Logo */}
                <h1 className="text-2xl font-bold">MyApp</h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 text-lg">
                    <li className="hover:text-blue-400 cursor-pointer">Home</li>
                    <li className="hover:text-blue-400 cursor-pointer">About</li>
                    <li className="hover:text-blue-400 cursor-pointer">Services</li>
                    <li className="hover:text-blue-400 cursor-pointer">Contact</li>
                </ul>

            </div>
        </nav>
    );
};

export default Navbar;