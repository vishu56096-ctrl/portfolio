function Footer() {
  return (
    <footer className="footer">
      <div className="container text-center">
        <div className="d-flex justify-content-center gap-3 mb-2">
          <a href="https://github.com/vishu56096-ctrl" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/vishal-kumar-7a4003393/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:vishalguptajnu925@gmail.com">Email</a>
        </div>
        <p className="mb-0">© {new Date().getFullYear()} Vishal Kumar — AI & Full-Stack</p>
      </div>
    </footer>
  );
}

export default Footer;
