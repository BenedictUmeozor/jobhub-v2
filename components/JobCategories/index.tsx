import JobCategory from "../JobCategory";
import styles from "./categories.module.scss";

const categories = [
  {
    id: 1,
    name: "technology",
  },
  {
    id: 2,
    name: "finance",
  },
  {
    id: 3,
    name: "education",
  },
  {
    id: 4,
    name: "science",
  },
  {
    id: 5,
    name: "engineering",
  },
  {
    id: 6,
    name: "creative and media",
  },
];

const JobCategories = () => {
  return (
    <div className={styles.categories}>
      {categories.map((category) => (
        <JobCategory category={category} key={category.id} />
      ))}
    </div>
  );
};
export default JobCategories;
