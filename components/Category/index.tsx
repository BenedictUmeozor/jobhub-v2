import Container from "../Container";
import JobCategories from "../JobCategories";
import styles from "./category.module.scss";

const Category = () => {
  return (
    <section className={styles.category}>
      <Container className={styles.container}>
        <h2>Explore jobs by category</h2>
        <p>
          Get the most exiting jobs from all around the world and grow your
          career fast with others
        </p>
        <JobCategories />
      </Container>
    </section>
  );
};
export default Category;
