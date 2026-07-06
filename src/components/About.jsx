import { useState } from 'react';

function About() {
  const [careerExpanded, setCareerExpanded] = useState(false);

  return (
    <section className="section bg-light-gray" id="about">
      <div className="container">
        <div className="row g-4 align-items-stretch">
          <div className="col-lg-6">
            <p className="section-kicker">About</p>
            <h2 className="section-title">I build data-driven products and ML-ready web apps.</h2>
            <p className="section-copy">
              I’m Vishal Kumar — an MCA student focused on AI engineering,
              data analytics, and full-stack development. I design scalable,
              production-minded solutions that connect data, models, and user
              experiences.
            </p>
            <p className="section-copy">
              Seeking roles at product-driven teams (AI / ML infra, data
              platforms, or full-stack product teams) where I can contribute
              end-to-end—from data and models to deployed applications.
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
              <h3>Full Stack & AI/ML Engineer</h3>
              <p>
                I am building strong skills in Full Stack Development,
                Data Analytics, and AI/ML.
              </p>
              {careerExpanded && (
                <>
                  <p>
                    My goal is to create scalable web applications and
                    intelligent solutions that solve real-world problems.
                  </p>
                  <p>
                    I believe in continuous learning and building
                    practical products that make a positive impact.
                  </p>
                </>
              )}
              <button
                type="button"
                className="btn btn-outline-primary btn-sm mt-3"
                onClick={() => setCareerExpanded((prev) => !prev)}
              >
                {careerExpanded ? 'Read less' : 'Read more'}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
