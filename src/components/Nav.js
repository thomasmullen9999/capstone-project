import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/menu" className="nav-link">
            Menu
          </Link>
        </li>
        <li>
          <Link to="/reservations" className="nav-link">
            Reservations
          </Link>
        </li>
        <li>
          <Link to="/order" className="nav-link">
            Order Online
          </Link>
        </li>
        <li>
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
