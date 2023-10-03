import styles from "./job.module.scss";
import one from "@/app/assets/logoipsum-245.svg";
import { Bookmark } from "react-feather";
import Image from "next/image";
import Link from "next/link";

const Job = () => {
  return (
    <div className={styles.job}>
      <div className={styles.header}>
        <div className={styles.company}>
          <Image src={one} alt="company" height={25} width={25} />
          <div className={styles.name}>
            <h4>Stark Technologies</h4>
            <p>Germany</p>
          </div>
        </div>
        <div className={styles.bookmark}>
          <Bookmark />
        </div>
      </div>
      <div className={styles.body}>
        <h3>Frontend Web Developer</h3>
        <span>1 day ago</span>
      </div>
      <div className={styles.footer}>
        <div className={styles.info}>
          <div>Full-time</div>
          <div>Hybrid</div>
        </div>
        <Link href={"/"}>Apply now</Link>
      </div>
    </div>
  );
};
export default Job;
