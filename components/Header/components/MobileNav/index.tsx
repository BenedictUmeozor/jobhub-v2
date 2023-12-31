"use client";

import Link from "next/link";
import styles from "./mobilenav.module.scss";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  {
    id: 1,
    name: "home",
    path: "/",
  },
  {
    id: 2,
    name: "category",
    path: "/category",
  },
  {
    id: 3,
    name: "service",
    path: "/service",
  },
  {
    id: 4,
    name: "jobs",
    path: "/jobs",
  },
];

const parent = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.01,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const child = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const MobileNav = () => {
  const pathName = usePathname();
  const isLoggedIn = false;

  return (
    <nav className={styles.nav}>
      <motion.ul variants={parent} initial="hidden" animate="visible">
        {links.map((link) => (
          <motion.li variants={child} key={link.id}>
            <Link
              href={link.path}
              className={`${pathName === link.path ? styles.active : ""}`}
            >
              {link.name}
            </Link>
          </motion.li>
        ))}
        {isLoggedIn ? (
          <>
            <motion.li className={styles.create}>
              <Link href="/jobs/new">Create job</Link>
            </motion.li>
          </>
        ) : (
          <>
            <motion.li variants={child} className={styles.login}>
              <Link href="/login">Login</Link>
            </motion.li>
            <motion.li variants={child} className={styles.register}>
              <Link href="/register">Register</Link>
            </motion.li>
          </>
        )}
      </motion.ul>
    </nav>
  );
};
export default MobileNav;
