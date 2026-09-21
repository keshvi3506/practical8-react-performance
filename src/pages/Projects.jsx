function Projects() {
  const projects = [
    {
      id: 1,
      name: "Website Development",
      status: "In Progress",
    },
    {
      id: 2,
      name: "Mobile Application",
      status: "Completed",
    },
    {
      id: 3,
      name: "Security Testing",
      status: "Pending",
    },
  ];

  return (
    <div className="page">
      <h1>Projects</h1>

      <p>Manage your projects below.</p>

      <div className="project-container">
        {projects.map((project) => (
          <div className="card" key={project.id}>
            <h2>{project.name}</h2>
            <p>Status: {project.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;