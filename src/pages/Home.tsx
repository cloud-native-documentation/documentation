function Home() {
  const handleClick = () => {
    console.log("Home button clicked!");
  };

  return (
    <button className="bg-blue-500 hover:bg-blue-600 p-3 rounded-lg" onClick={handleClick}>
      <span className="text-white">Login</span>
    </button>
  );
}

export default Home;
