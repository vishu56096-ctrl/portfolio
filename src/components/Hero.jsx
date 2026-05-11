const resumeLink = '/resume02.pdf';

function Hero() {
  return (
    <section className="section hero-section fade-in" id="home">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <p className="section-kicker"></p>
            <h1 className="display-4 fw-bold mb-3">Hi, I'm Vishal Kumar</h1>
            <h2 className="hero-subtitle mb-4">
              MCA Student | AI/ML Enthusiast | Full Stack Developer
            </h2>
            <p className="hero-copy mb-4">
              I build clean, responsive web experiences and enjoy solving real
              problems with code, data, and intelligent systems.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3">
              <a className="btn btn-primary btn-lg" href={resumeLink} download="Vishal-Kumar-Resume.pdf">
                Download Resume
              </a>
              <a className="btn btn-outline-primary btn-lg" href="#contact">
                Contact Me
              </a>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="hero-image-wrap">
              <img
                className="hero-image"
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
                alt="Modern developer workspace"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
