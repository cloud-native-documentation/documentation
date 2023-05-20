const Projects: React.FC<{
  addFileToTab: (file: string) => void;
}> = ({ addFileToTab }) => {
  const files: string[] = ["File1", "File2", "File3", "File4"];
  return (
    <>
      {files.map((file) => (
        <button onClick={() => addFileToTab(file)}>{file}</button>
      ))}
    </>
  );
};

export default Projects;
