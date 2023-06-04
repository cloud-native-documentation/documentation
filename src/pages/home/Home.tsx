import { useAuthStore } from "../../store/auth";

const styles = {
  homeContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
  },
  projectCards: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
  },
};

function Home() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return (
    <div style={styles.homeContainer}>
      {isLoggedIn ? (
        <h1 className="text-center text-9xl font-extrabold">Welcome!</h1>
      ) : (
        <h1 className="text-center text-9xl font-extrabold">Please Login!</h1>
      )}
    </div>
  );
}

export default Home;
