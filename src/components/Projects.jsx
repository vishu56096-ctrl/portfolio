import ProjectCard from './ProjectCard.jsx';

// Edit this array later to update your portfolio projects.
const projects = [
  {
    title: ' Wanderlust (Airbnb Clone)',
    description: 'This project helped me learn how a complete web application works from backend to deployment.I completed it in a few weeks while improving my problem-solving and coding skills',
    tech: ['React', 'Bootstrap', 'javascript', 'mongodb','express','nodejs'],
    github: 'https://github.com/vishu56096-ctrl/wanderlust',
    demo: 'https://wanderlust-qov2.onrender.com',
    image: '/wanderlust.png',
  },
  {
    title: 'Weather-Forecast Website',
    description: 'Developed a responsive Weather Forecast  that provides real-time weather updates using API integration.',
    tech: ['HTML', 'CSS', 'React', 'javascript','api'],
    github: 'https://github.com/vishu56096-ctrl/Weather-Forecast',
    demo: 'https://weather-forecast-qg8g.onrender.com',
    image: '/weather-forecast.png',
  },
  {
    title: 'Data Dashboard',
    description: 'A clean dashboard layout for viewing business metrics and simple data visualizations.',
    tech: ['Python', 'SQL', 'Bootstrap'],
    github: '#',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80',
  },
];

function Projects() {
  return (
    <section className="section bg-light-gray" id="projects">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">Projects</p>
          <h2 className="section-title"></h2>
        </div>

        <div className="row g-4">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
