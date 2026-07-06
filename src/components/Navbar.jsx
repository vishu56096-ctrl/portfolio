import { useEffect, useState } from 'react';

const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

function Navbar() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || 'light';
    } catch (e) {
      return 'light';
    }
  });

  useEffect(() => {
    const html = document.documentElement;
    if (theme === 'dark') html.classList.add('dark');
    else html.classList.remove('dark');
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {}
  }, [theme]);

  return (
    <nav className="navbar navbar-expand-lg sticky-top portfolio-navbar">
      <div className="container">
        <a className="navbar-brand fw-bold text-primary" href="#home">
          Vishal Kumar
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#portfolioNavbar"
          aria-controls="portfolioNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="portfolioNavbar">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            {navLinks.map((link) => (
              <li className="nav-item" key={link}>
                <a className="nav-link" href={`#${link.toLowerCase()}`}>
                  {link}
                </a>
              </li>
            ))}
            <li className="nav-item d-flex align-items-center ms-2">
              <div className="theme-toggle">
                <label className="form-check form-switch mb-0" style={{cursor:'pointer'}}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    aria-label="Toggle theme"
                    checked={theme === 'dark'}
                    onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  />
                </label>
              </div>
            </li>
          </ul>
          <a className="btn btn-primary ms-lg-3 mt-3 mt-lg-0" href="#resume">
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
