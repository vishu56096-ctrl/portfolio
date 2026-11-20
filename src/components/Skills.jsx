import { useState } from 'react';

const groups = [
  {
    title: 'AI / ML',
    items: ['PyTorch', 'scikit-learn', 'Pandas', 'NumPy', 'Gymnasium', 'Streamlit'],
  },
  { title: 'Programming', items: ['Python', 'JavaScript', 'SQL'] },
  { title: 'Data & Databases', items: ['SQL', 'MongoDB', 'Supabase'] },
  {
    title: 'Web Development',
    items: ['React', 'Node.js', 'Express', 'MongoDB', 'HTML', 'CSS', 'Bootstrap'],
  },
  { title: 'Tools', items: ['Git', 'Docker', 'VS Code'] },
];

function Skills() {
  const [expanded, setExpanded] = useState(false);
  const visibleGroups = expanded ? groups : groups.slice(0, 3);

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">Skills</p>
          <h2 className="section-title">Technologies I work with</h2>
        </div>

        <div className="row g-4" id="skill-groups">
          {visibleGroups.map((g) => (
            <div className="col-6 col-md-4 col-xl-3" key={g.title}>
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
        <div className="text-center mt-4">
          <button
            className="btn btn-outline-primary"
            type="button"
            aria-expanded={expanded}
            aria-controls="skill-groups"
            onClick={() => setExpanded((isExpanded) => !isExpanded)}
          >
            View {expanded ? 'less' : 'more'}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Skills;
