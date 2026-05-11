function ProjectCard({ project }) {
  return (
    <div className="col-md-6 col-lg-4">
      <article className="project-card h-100">
        <img className="project-image" src={project.image} alt={project.title} />
        <div className="project-body">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="d-flex flex-wrap gap-2 mb-4">
            {project.tech.map((item) => (
              <span className="badge tech-badge" key={item}>
                {item}
              </span>
            ))}
          </div>
          <div className="d-flex gap-2">
            <a className="btn btn-outline-primary btn-sm" href={project.github}>
              GitHub
            </a>
            <a className="btn btn-primary btn-sm" href={project.demo}>
              Live Demo
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}

export default ProjectCard;
