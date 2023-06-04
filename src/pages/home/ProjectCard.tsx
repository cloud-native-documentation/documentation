function ProjectCard({ imageSrc, altText, description, href }) {
  const imageStyle = {
    width: "500px",
    height: "300px",
  };

  const descriptionStyle = {
    color: "purple",
    fontSize: "1.2em",
    alignSelf: "flex-end",
  };

  return (
    <div>
      <a href={href}>
        <img src={imageSrc} alt={altText} style={imageStyle} />
        <span style={descriptionStyle}>{description}</span>
      </a>
    </div>
  );
}

export default ProjectCard;
