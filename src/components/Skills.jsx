const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Bootstrap',
  'Python',
  'SQL',
  'Git',
  'AI/ML basics',
];

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">Skills</p>
          <h2 className="section-title">Technologies I work with</h2>
        </div>

        <div className="row g-3">
          {skills.map((skill) => (
            <div className="col-6 col-md-4 col-lg-3" key={skill}>
              <div className="skill-card">{skill}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
