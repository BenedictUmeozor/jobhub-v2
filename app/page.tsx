import Container from "./components/Container";
import styles from "./page.module.scss";
import image from "./assets/hero.svg";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "react-feather";
import Category from "./components/Category";
import Startups from "./components/Startups";
import HowItWorks from "./components/HowItWorks";
import PopularJobs from "./components/PopularJobs";
import Explore from "./components/Explore";

const Home = () => {
  return (
    <section className={styles.home}>
      <Container className={styles.container}>
        <div className={styles.left}>
          <div>
            <h2>
              Find your dream job with <Link href="/">Jobhub.</Link>
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
      <Category />
      <Startups />
      <HowItWorks />
      <PopularJobs />
      <Explore />
    </section>
  );
};
export default Home;
