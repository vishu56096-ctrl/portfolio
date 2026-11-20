import { useState } from 'react';

function About() {
  const [careerExpanded, setCareerExpanded] = useState(false);

  return (
    <section className="section bg-light-gray" id="about">
      <div className="container">
        <div className="row g-4 align-items-stretch">
          <div className="col-lg-6">
            <p className="section-kicker">About</p>
            <h2 className="section-title">
              Aspiring AI/ML Engineer.
            </h2>
            <p className="section-copy">
              I'm Vishal Kumar, an MCA student at Jaipur National University
              with a BSc in Physics. I work with Python and PyTorch to build
              machine learning and computer vision projects. I also know the
              MERN stack for web apps.
            </p>
            <p className="section-copy">
              I'm looking for an AI/ML internship where I can work on real
              projects and learn from experienced engineers.
            </p>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-card h-100">
              <span className="card-label">Education</span>
              <h3>MCA, Jaipur National University (2025-2027)</h3>
              <p>
                Previously BSc in Physics, Veer Kunwar Singh University
                (2022-2025). Learning programming, databases, machine learning
                and software development.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-card h-100">
              <span className="card-label">Career Goal</span>
              <h3>AI/ML Engineer</h3>
              <p>
                I'm building skills in deep learning and computer vision. I can
                also build full-stack web apps.
              </p>
              {careerExpanded && (
                <p>
                  My goal is to create useful AI-powered web apps. I learn by
                  building real projects like SnapClass, a CIFAR-10 CNN and a
                  Flappy Bird DQN agent.
                </p>
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
