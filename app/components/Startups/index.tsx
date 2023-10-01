import Container from "../Container";
import styles from "./startups.module.scss";
import image from "../../assets/interview.svg";
import Image from "next/image";
import one from "../../assets/logoipsum-245.svg";
import two from "../../assets/logoipsum-247.svg";
import three from "../../assets/logoipsum-282.svg";
import four from "../../assets/logoipsum-291.svg";
import five from "../../assets/logoipsum-296.svg";
import six from "../../assets/logoipsum-298.svg";

const Startups = () => {
  return (
    <div className={styles.div}>
      <Container className={styles.container}>
        <div className={styles.left}>
          <h2>Get hired by the popular startups</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            alias error nostrum perspiciatis iusto. Alias!
          </p>
          <div className={styles.companies}>
            <div>
              <Image src={one} alt="company" />
              Nebula Nexus
            </div>
            <div>
              <Image src={two} alt="company" />
              Phoenix Innovators
            </div>
            <div>
              <Image src={three} alt="company" />
              LunaNova Enterprises
            </div>
            <div>
              <Image src={four} alt="company" />
              Starlight Solutions
            </div>
            <div>
              <Image src={five} alt="company" />
              TerraTech Industries
            </div>
            <div>
              <Image src={six} alt="company" />
              Spectrum Innovators
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <Image src={image} alt="image" height={500} width={500} />
        </div>
      </Container>
    </div>
  );
};
export default Startups;
