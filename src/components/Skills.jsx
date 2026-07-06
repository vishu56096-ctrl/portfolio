const groups = [
  { title: 'Programming', items: ['Python', 'JavaScript', 'HTML', 'CSS', 'React'] },
  { title: 'Data & Databases', items: ['SQL', 'Pandas', 'NumPy', 'MongoDB'] },
  { title: 'AI / ML', items: ['scikit-learn', 'Modeling basics', 'Data Wrangling'] },
  { title: 'Tools', items: ['Git', 'Docker', 'VS Code', 'Bootstrap'] },
];

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">Skills</p>
          <h2 className="section-title">Technologies I work with</h2>
        </div>

        <div className="row g-4">
          {groups.map((g) => (
            <div className="col-6 col-md-3" key={g.title}>
              <div className="info-card h-100">
                <span className="card-label">{g.title}</span>
                <ul style={{marginTop:8, paddingLeft:18}}>
                  {g.items.map((it) => (
                    <li key={it} style={{marginBottom:6}}>{it}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
