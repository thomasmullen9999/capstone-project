import React from "react";

const Nav = () => {
  return (
    <nav className="bg-gray-100 py-4 px-6">
      <ul className="flex space-x-6 text-gray-800 font-medium">
        <li>
          <a href="/" className="hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="/menu" className="hover:underline">
            Menu
          </a>
        </li>
        <li>
          <a href="/reservations" className="hover:underline">
            Reservations
          </a>
        </li>
        <li>
          <a href="/order" className="hover:underline">
            Order Online
          </a>
        </li>
        <li>
          <a href="/login" className="hover:underline">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
