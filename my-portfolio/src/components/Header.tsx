import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import "./Header.css";

export default function Header() {
  return (
    <header className="portfolio-header">
      {/* ROW 1: Logo/Name + Email */}
      <div className="header-top">
        <div className="brand">
          {/* Using your existing logo image here */}
          <img
            src="/android-chrome-192x192.png"
            alt="Logo"
            className="brand-logo"
          />

          <div className="brand-text">
            <h1>Robert Rodriguez</h1>
            <p>Student & Developer</p>
          </div>
        </div>

        <div className="contact-info">
          <span className="contact-label">Contact Me</span>
          <a href="mailto:roberiguez3@gmail.com" className="contact-email">
            roberiguez3@gmail.com
          </a>
        </div>
      </div>

      {/* The Divider Line */}
      <hr className="header-divider" />

      {/* Other pages*/}
      <div className="header-bottom">
        <nav className="nav-links">
          <Link to="/">About Me</Link>
          <Link to="/developer">Developer</Link>
          <Link to="/musician">Musician</Link>
        </nav>

        {/* Social Icons */}
        <div className="social-icons">
          <a
            href="https://www.instagram.com/wh0s.r0bert/"
            className="icon-box"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="icon-box"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.linkedin.com/in/roberto-rodriguez-bb7910374/"
            className="icon-box"
            target="_blank"
            rel="noopener noreferrer"
            title="Linked-in"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </header>
  );
}
