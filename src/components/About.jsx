function About() {
  return (
    <section className="section bg-light-gray" id="about">
      <div className="container">
        <div className="row g-4 align-items-stretch">
          <div className="col-lg-6">
            <p className="section-kicker"></p>
            <h2 className="section-title">Passionate developer with a learning mindset.</h2>
            <p className="section-copy">
              I am Vishal Kumar, an MCA student interested in AI/ML, web
              development, and data analysis. I enjoy creating beginner-friendly,
              practical applications that are useful, clean, and easy to improve.
            </p>
            <p className="section-copy">
              My focus is on strengthening full stack development skills while
              exploring how machine learning and data can improve software
              products.
            </p>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-card h-100">
              <span className="card-label">Education</span>
              <h3>MCA Student</h3>
              <p>
                Building a strong foundation in computer applications,
                programming, databases, and modern software development.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-card h-100">
              <span className="card-label">Career Goal</span>
              <h3>Full Stack + AI</h3>
              <p>
                To become a skilled developer who builds scalable web apps and
                applies AI/ML concepts to solve meaningful problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
