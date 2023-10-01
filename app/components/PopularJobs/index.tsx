import Container from "../Container";
import Job from "../Job";
import styles from "./popular.module.scss";

const PopularJobs = () => {
  return (
    <div className={styles.div}>
      <Container>
        <h2>Explore popular jobs</h2>
        <p>
          Check out featured jobs from popular companies. Start applying now
        </p>
        <div className={styles.jobs}>
          <Job />
          <Job />
          <Job />
          <Job />
          <Job />
          <Job />
        </div>
      </Container>
    </div>
  );
};
export default PopularJobs;
