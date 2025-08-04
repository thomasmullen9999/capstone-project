const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-section">
          <img src="/logo.png" alt="Company Logo" className="footer-logo" />
          <p>&copy; {new Date().getFullYear()} Your Company Name</p>
        </div>

        <div className="footer-section">
          <h2 className="footer-title">Contact Us</h2>
          <p>Email: info@yourcompany.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 123 Main Street, City, State</p>
        </div>

        <div className="footer-section">
          <h2 className="footer-title">Quick Links</h2>
          <ul className="footer-links">
            <li>
              <a href="/about" className="footer-link">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="footer-link">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="footer-link">
                Contact
              </a>
            </li>
            <li>
              <a href="/privacy" className="footer-link">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h2 className="footer-title">Follow Us</h2>
          <ul className="social-links">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/icons/facebook.svg"
                  alt="Facebook"
                  className="social-icon"
                />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/icons/twitter.svg"
                  alt="Twitter"
                  className="social-icon"
                />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/icons/instagram.svg"
                  alt="Instagram"
                  className="social-icon"
                />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/icons/linkedin.svg"
                  alt="LinkedIn"
                  className="social-icon"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
