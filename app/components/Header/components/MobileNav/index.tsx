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
    id: 1,
    name: "category",
    path: "/category",
  },
  {
    id: 1,
    name: "service",
    path: "/service",
  },
  {
    id: 1,
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
      delay: 0.1,
      type: "spring",
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const child = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const MobileNav = () => {
  const pathName = usePathname();

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
        <motion.li variants={child} className={styles.login}>
          <Link href="/login">Login</Link>
        </motion.li>
        <motion.li variants={child} className={styles.register}>
          <Link href="/register">Register</Link>
        </motion.li>
      </motion.ul>
    </nav>
  );
};
export default MobileNav;
