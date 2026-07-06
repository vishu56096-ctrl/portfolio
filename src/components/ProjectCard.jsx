function ProjectCard({ project }) {
  const tidy = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  return (
    <div className="col-md-6 col-lg-4">
      <article className="project-card h-100">
        <img className="project-image" src={project.image} alt={project.title} />
        <div className="project-body">
          <p className="mb-3">{project.description}</p>
          <div className="d-flex flex-wrap gap-2 mb-3">
            {project.tech.map((item) => (
              <span className="badge tech-badge" key={item}>
                {tidy(item)}
              </span>
            ))}
          </div>
          <div className="d-flex gap-2 project-actions">
            {project.github && (
              <a className="btn btn-outline-primary btn-sm" href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}
            {project.demo && (
              <a className="btn btn-primary btn-sm" href={project.demo} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            )}
            {project.caseStudy && (
              <a className="btn btn-outline-primary btn-sm" href={project.caseStudy}>
                Case Study
              </a>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}

export default ProjectCard;
