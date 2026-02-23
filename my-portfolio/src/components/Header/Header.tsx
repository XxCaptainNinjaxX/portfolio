import { NavLink } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import "./Header.css";

interface HeaderProps {
  isSplashOn: boolean;
  toggleSplash: () => void;
}

export default function Header({ isSplashOn, toggleSplash }: HeaderProps) {
  return (
    <header className="portfolio-header">
      <div className="header-top">
        <div className="brand">
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
          <span className="contact-label">
            Contact<span className="desktop-text"> Me</span>
            <span className="mobile-text">:</span>
          </span>
          <a href="mailto:roberiguez3@gmail.com" className="contact-email">
            roberiguez3@gmail.com
          </a>
        </div>
      </div>

      <hr className="header-divider" />

      {/* Pages*/}
      <div className="header-bottom">
        <nav className="nav-links">
          <NavLink to="/">About Me</NavLink>
          <NavLink to="/student">Student</NavLink>
          <NavLink to="/developer">Developer</NavLink>
          <NavLink to="/musician">Musician</NavLink>
        </nav>

        {/* Socials */}
        <div className="social-icons">
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
          <a
            href="../../../Roberto Rodriguez's Resume.pdf"
            download="Roberto Rodriguez's Resume.pdf"
            className="resume-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>

          {/* cursor switch */}
          <div className="container">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              checked={isSplashOn}
              onChange={toggleSplash}
            />
            <label htmlFor="checkbox" className="label">
              {}
            </label>
          </div>
        </div>
      </div>
    </header>
  );
}
