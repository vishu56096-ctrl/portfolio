import { useState } from 'react';

function ProjectCard({ project }) {
  const [imageFailed, setImageFailed] = useState(false);
  const canOpenLink = (link) =>
    typeof link === 'string' &&
    link.trim() !== '' &&
    link.trim() !== 'TODO_LINK' &&
    link.trim() !== '#';

  const actions = [
    { label: 'Live Demo', link: project.live, variant: 'btn-primary' },
    { label: 'GitHub', link: project.github, variant: 'btn-outline-primary' },
    { label: 'Documentation', link: project.docs, variant: 'btn-outline-primary' },
  ];

  return (
    <div className="col-md-6 col-lg-4">
      <article className="project-card h-100">
        {project.image && !imageFailed ? (
          <img
            className="project-image"
            src={project.image}
            alt={project.title}
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div
            className="project-image project-image-placeholder"
            role="img"
            aria-label={project.title}
          >
            <span>{project.title}</span>
          </div>
        )}
        <div className="project-body">
          <h3>{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="d-flex flex-wrap gap-2 mb-3">
            {project.tech.map((item) => (
              <span className="badge tech-badge" key={item}>
                {item}
              </span>
            ))}
          </div>
          <div className="d-flex flex-wrap gap-2 project-actions">
            {actions.map(({ label, link, variant }) =>
              canOpenLink(link) ? (
                <a
                  className={`btn ${variant} btn-sm`}
                  href={link}
                  key={label}
                  target="_blank"
                  rel="noreferrer"
                >
                  {label}
                </a>
              ) : (
                <button
                  className="btn btn-secondary btn-sm"
                  disabled
                  key={label}
                  type="button"
                >
                  {label}
                </button>
              ),
            )}
          </div>
        </div>
      </article>
    </div>
  );
}

export default ProjectCard;
