const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white sticky-top portfolio-navbar">
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
