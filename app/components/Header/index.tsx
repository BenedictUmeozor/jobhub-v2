import Link from "next/link";
import Container from "../Container";
import styles from "./header.module.scss";
import Navbar from "../Navbar";
import MenuBtn from "./components/Menu";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">Jobhub.</Link>
        </div>
        <Navbar />
        <div className={styles.authActions}>
          <Link href="/login">login</Link>
          <Link href="/register">register</Link>
        </div>
        <MenuBtn />
      </Container>
    </header>
  );
};
export default Header;
