import { Category } from "@/helpers/interfaces";
import Link from "next/link";
import { Monitor } from "react-feather";
import styles from "./category.module.scss"

type PropTypes = {
  category: Category;
};

const JobCategory = ({ category }: PropTypes) => {
  return (
    <div className={styles.category}>
      <div>
        <Monitor />
      </div>
      <Link href={"/"}>{category.name}</Link>
      <p>100 jobs</p>
    </div>
  );
};
export default JobCategory;
