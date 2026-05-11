const resumeLink = '/resume02.pdf';

function Resume() {
  return (
    <section className="section resume-section" id="resume">
      <div className="container text-center">
        <p className="section-kicker">Resume</p>
        <h2 className="section-title">Want to know more about my work?</h2>
        <p className="section-copy mx-auto">
          Download my resume to view my education, skills, projects, and career
          details in one place.
        </p>
        <a className="btn btn-primary btn-lg mt-3" href={resumeLink} download="Vishal-Kumar-Resume.pdf">
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Resume;
