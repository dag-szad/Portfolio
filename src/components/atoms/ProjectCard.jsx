const ProjectCard = ({ name, demo, repo, shortDescription, screenshot }) => {
  return (
    <div>
      <img src={screenshot} alt={name} />
      <h2>{name}</h2>
      <p>{shortDescription}</p>
      <a href={demo} target="_blank" rel="noopener noreferrer">
        Demo
      </a>
      <a href={repo} target="_blank" rel="noopener noreferrer">
        Repository
      </a>
    </div>
  );
};

export { ProjectCard };
