export const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">My Website</div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#home" className="text-gray-600 hover:text-gray-800">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-600 hover:text-gray-800">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="text-gray-600 hover:text-gray-800">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-600 hover:text-gray-800">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
