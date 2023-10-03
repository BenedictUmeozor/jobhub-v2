import Container from "../Container";
import styles from "./how.module.scss";
import image from "@/app/assets/how_it_works.svg";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <div className={styles.div}>
      <Container className={styles.container}>
        <div className={styles.left}>
          <Image src={image} alt="How it works" height={500} width={500} />
        </div>
        <div className={styles.right}>
          <h2>How it works</h2>
          <p className={styles.mainText}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
            est ex voluptas explicabo sequi molestiae.
          </p>
          <div className={styles.step}>
            <div className={styles.badge}>1</div>
            <div className={styles.content}>
              <h4>Create Account</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptate, voluptatem!
              </p>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.badge}>2</div>
            <div className={styles.content}>
              <h4>Apply for your job</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptate, voluptatem!
              </p>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.badge}>3</div>
            <div className={styles.content}>
              <h4>Hire Now</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptate, voluptatem!
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default HowItWorks;
