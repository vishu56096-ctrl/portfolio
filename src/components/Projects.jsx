import { useState } from 'react';
import ProjectCard from './ProjectCard.jsx';

const mlProjects = [
  {
    title: 'SnapClass: AI Attendance System',
    description:
      'AI attendance system combining face recognition and voice verification with Streamlit and Supabase.',
    tech: ['Python', 'Streamlit', 'Supabase', 'Face Recognition'],
    image: '',
    github: 'https://github.com/vishu56096-ctrl/SnapClass-AI-Attendance',
    live: 'https://snapclass-smart-ai.streamlit.app/',
    docs: 'https://github.com/vishu56096-ctrl/SnapClass-AI-Attendance#readme',
  },
  {
    title: 'Flappy Bird DQN',
    description:
      'Deep reinforcement learning agent trained for 17,346 episodes using PyTorch and Gymnasium.',
    tech: ['PyTorch', 'Gymnasium', 'Deep Reinforcement Learning'],
    image: '',
    github: 'https://github.com/vishu56096-ctrl/flappy-bird-dqn-pytorch',
    live: 'TODO_LINK',
    docs: '/docs/flappy-bird-dqn-report.pdf',
  },
  {
    title: 'CIFAR-10 CNN',
    description: 'PyTorch CNN image classifier achieving 74.71% accuracy on CIFAR-10.',
    tech: ['PyTorch', 'Python', 'CNN'],
    image: '',
    github: 'TODO_LINK',
    live: 'TODO_LINK',
    docs: 'TODO_LINK',
  },
  {
    title: 'Telco Customer Churn Prediction',
    description: 'scikit-learn classification model to predict customer churn from telecom data.',
    tech: ['scikit-learn', 'Pandas', 'NumPy'],
    image: '',
    github: 'TODO_LINK',
    live: 'TODO_LINK',
    docs: 'TODO_LINK',
  },
  {
    title: 'CreditWise (Loan Prediction)',
    description: 'Loan prediction project using classification on applicant and credit data.',
    tech: ['scikit-learn', 'Pandas', 'NumPy'],
    image: '',
    github: 'TODO_LINK',
    live: 'TODO_LINK',
    docs: 'TODO_LINK',
  },
  {
    title: 'Bank Marketing Term Deposit Prediction',
    description: 'Classification model predicting whether a client subscribes to a term deposit.',
    tech: ['scikit-learn', 'Pandas', 'NumPy'],
    image: '',
    github: 'TODO_LINK',
    live: 'TODO_LINK',
    docs: 'TODO_LINK',
  },
];

const fullStackProjects = [
  {
    title: 'Wanderlust (Airbnb Clone)',
    description:
      'A full-stack travel booking app demonstrating authentication, listing management, and deployment to Render.',
    tech: ['React', 'Bootstrap', 'JavaScript', 'MongoDB', 'Express', 'Node.js'],
    image: '/wanderlust.png',
    github: 'https://github.com/vishu56096-ctrl/wanderlust',
    live: 'https://wanderlust-qov2.onrender.com',
    docs: 'TODO_LINK',
  },
  {
    title: 'Weather-Forecast Website',
    description:
      'Responsive weather web app with external API integration, caching, and responsive UI patterns.',
    tech: ['HTML', 'CSS', 'React', 'JavaScript', 'API'],
    image: '/weather-forecast.png',
    github: 'https://github.com/vishu56096-ctrl/Weather-Forecast',
    live: 'https://weather-forecast-qg8g.onrender.com',
    docs: 'TODO_LINK',
  },
];

function ProjectSection({ title, projects, sectionId }) {
  const [expanded, setExpanded] = useState(false);
  const visibleProjects = expanded ? projects : projects.slice(0, 3);
  const hasMoreProjects = projects.length > 3;

  return (
    <>
      <div className="section-heading">
        <h2 className="section-title">{title}</h2>
      </div>
      <div className="row g-4" id={sectionId}>
        {visibleProjects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
      {hasMoreProjects && (
        <div className="text-center mt-4">
          <button
            className="btn btn-outline-primary"
            type="button"
            aria-expanded={expanded}
            aria-controls={sectionId}
            onClick={() => setExpanded((isExpanded) => !isExpanded)}
          >
            View {expanded ? 'less' : 'more'}
          </button>
        </div>
      )}
    </>
  );
}

function Projects() {
  return (
    <section className="section bg-light-gray" id="projects">
      <div className="container">
        <ProjectSection
          title="AI / ML Projects"
          projects={mlProjects}
          sectionId="ml-project-list"
        />
        <div className="mt-5">
          <ProjectSection
            title="Full Stack Projects"
            projects={fullStackProjects}
            sectionId="full-stack-project-list"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
