import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.scss';

export default function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className={`${styles.header} navbar navbar-expand-lg navbar-dark sticky-top`}>
      <div className="container-fluid">
        <Link to="/" className={`${styles.logo} navbar-brand`} onClick={handleLinkClick}>
          Movies
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className={`${styles.navLinks} navbar-nav`}>
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${isActive('/') ? styles.active : ''}`}
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/favorites"
                className={`nav-link ${isActive('/favorites') ? styles.active : ''}`}
                onClick={handleLinkClick}
              >
                Favoritos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}