import Container from "./components/Container";
import styles from "./page.module.scss";
import image from "./assets/hero.svg";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "react-feather";

const Home = () => {
  return (
    <section className={styles.home}>
      <Container className={styles.container}>
        <div className={styles.left}>
          <div>
            <h2>
              Find your dream with <Link href="/">Jobhub.</Link>
            </h2>
            <p>
              Get the most exiting jobs from all around the world and grow your
              career fast with others
            </p>
            <Link href="/jobs" className={styles.button}>
              Explore <ChevronRight />
            </Link>
          </div>
        </div>
        <div className={styles.right}>
          <Image src={image} height={500} width={500} alt="image" />
        </div>
      </Container>
    </section>
  );
};
export default Home;
