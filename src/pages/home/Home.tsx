import createProjectIcon from "../../assets/create_project.svg";
import existProjectIcon from "../../assets/exist_project.png";
import ProjectCard from "./ProjectCard";
import { useAuthStore } from "./store/auth";

// Styles for the component
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
    gap: "40px", // Adjust the gap between the cards
  },
};

function Home() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return (
    // Conditional rendering based on the isLoggedIn state
    !isLoggedIn ? (
      <div>
        <span>fuck</span>
      </div>
    ) : (
      <div style={styles.homeContainer}>
        <div style={styles.projectCards}>
          <ProjectCard
            imageSrc={createProjectIcon}
            altText="Create a project"
            description="Create a project"
            href="explorer"
          />

          <ProjectCard
            imageSrc={existProjectIcon}
            altText="Open an existing item"
            description="Open an existing item"
            href="explorer"
          />
        </div>
      </div>
    )
  );
}

export default Home;
