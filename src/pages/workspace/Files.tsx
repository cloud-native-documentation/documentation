const Files: React.FC<{ title: string }> = (props) => {
  return (
    <div className="w-3/12 bg-blue-400 py-3 pl-3">
      <p>{props.title}</p>
    </div>
  );
};

export default Files;
