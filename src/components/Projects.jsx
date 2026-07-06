import ProjectCard from './ProjectCard.jsx';

// Single merged projects list (featured + capstone merged)
const projects = [
  {
    title: 'Wanderlust (Airbnb Clone)',
    description:
      'A full-stack travel booking app demonstrating authentication, listing management, and deployment to Render.',
    tech: ['React', 'Bootstrap', 'javascript', 'mongodb', 'express', 'nodejs'],
    github: 'https://github.com/vishu56096-ctrl/wanderlust',
    demo: 'https://wanderlust-qov2.onrender.com',
    caseStudy: '#case-studies',
    image: '/wanderlust.png',
  },
  {
    title: 'Weather-Forecast Website',
    description:
      'Responsive weather web app with external API integration, caching, and responsive UI patterns.',
    tech: ['HTML', 'CSS', 'React', 'javascript', 'api'],
    github: 'https://github.com/vishu56096-ctrl/Weather-Forecast',
    demo: 'https://weather-forecast-qg8g.onrender.com',
    image: '/weather-forecast.png',
  },
  {
    title: 'Data Dashboard',
    description:
      'Interactive dashboard for business metrics and visualizations; built with Python data stack and embedded charts.',
    tech: ['Python', 'SQL', 'Bootstrap'],
    github: '#',
    demo: '#',
    caseStudy: '#case-studies',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'Google Data Analytics Capstone',
    description:
      'Capstone project from the Google Data Analytics Professional Certificate showcasing end-to-end analysis and visualization.',
    tech: ['SQL', 'Google Sheets', 'Data Cleaning', 'Visualization'],
    github: '#',
    demo: '#',
    caseStudy: 'https://www.youtube.com/',
    image: '/google-data-capstone.png',
  },
];

function Projects() {
  const featuredProjects = projects.slice(0, 3);
  const capstoneProjects = projects.slice(3);

  return (
    <section className="section bg-light-gray" id="projects">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">Projects</p>
        </div>

        <div className="row g-4">
          {featuredProjects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>

        {capstoneProjects.length > 0 && (
          <>
            <div className="section-heading mt-5">
              <p className="section-kicker">Capstone Projects</p>
            </div>
            <div className="row g-4">
              {capstoneProjects.map((project) => (
                <ProjectCard project={project} key={project.title} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Projects;
