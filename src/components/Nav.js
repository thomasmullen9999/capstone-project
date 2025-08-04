const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li>
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="nav-link">
            About
          </a>
        </li>
        <li>
          <a href="/menu" className="nav-link">
            Menu
          </a>
        </li>
        <li>
          <a href="/reservations" className="nav-link">
            Reservations
          </a>
        </li>
        <li>
          <a href="/order" className="nav-link">
            Order Online
          </a>
        </li>
        <li>
          <a href="/login" className="nav-link">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
