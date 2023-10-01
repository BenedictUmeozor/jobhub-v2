import Link from "next/link";
import Container from "../Container";
import styles from "./footer.module.scss";
import { Twitter, Facebook, Instagram } from "react-feather";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <div className={styles.main}>
          <Link href="/">Jobhub.</Link>
          <p>+234 811 217 6272</p>
          <p>jobhub@gmail.com</p>
          <div className={styles.socials}>
            <Twitter />
            <Facebook />
            <Instagram />
          </div>
        </div>
        <div>
          <h3>Take a tour</h3>
          <ul>
            <li>
              <Link href="/">Features</Link>
            </li>
            <li>
              <Link href="/">Pricing</Link>
            </li>
            <li>
              <Link href="/">Product</Link>
            </li>
            <li>
              <Link href="/">Support</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Our company</h3>
          <ul>
            <li>
              <Link href="/">About Us</Link>
            </li>
            <li>
              <Link href="/">Blog</Link>
            </li>
            <li>
              <Link href="/">Media</Link>
            </li>
            <li>
              <Link href="/">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Resources</h3>
          <ul>
            <li>
              <Link href="/">Privacy</Link>
            </li>
            <li>
              <Link href="/">Term of use</Link>
            </li>
            <li>
              <Link href="/">Help center</Link>
            </li>
          </ul>
        </div>
      </Container>
      <Container className={styles.copyright}>
        <p>
          &copy; All rights reserved |{" "}
          <a href="htps://benedictumeozor.vercel.app" rel="noopener noreferrer">
            Benedict
          </a>
        </p>
      </Container>
    </footer>
  );
};
export default Footer;
