import createProjectIcon from "../../assets/create_project.svg";
import existProjectIcon from "../../assets/exist_project.png";
import ProjectCard from "./ProjectCard";

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
  return (
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
          href="workspace"
        />
      </div>
    </div>
  );
}

export default Home;
