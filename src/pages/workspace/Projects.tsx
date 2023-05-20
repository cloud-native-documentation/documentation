const Projects: React.FC<{
  addFileToTab: (file: string) => void;
}> = ({ addFileToTab }) => {
  return <button onClick={() => addFileToTab("123")}>select</button>;
};

export default Projects;
