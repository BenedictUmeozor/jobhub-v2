import Link from "next/link";
import Container from "../Container";
import styles from "./explore.module.scss";

const Explore = () => {
  return (
    <div className={styles.div}>
      <Container>
        <div className={styles.box}>
          <div className={styles.left}>
            <h2>Explore a new job today!</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, atque.
            </p>
          </div>
          <Link href="/">Apply now</Link>
        </div>
      </Container>
    </div>
  );
};
export default Explore;
