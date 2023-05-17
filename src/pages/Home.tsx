function Home() {
  const handleClick = () => {
    console.log("Home button clicked!");
  };

  return (
    <button
      className="rounded-lg bg-blue-500 p-3 hover:bg-blue-600"
      onClick={handleClick}
    >
      <span className="text-white">Login</span>
    </button>
  );
}

export default Home;
