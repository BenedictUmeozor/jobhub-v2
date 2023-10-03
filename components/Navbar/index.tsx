"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.scss";

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

const Navbar = () => {
  const pathName = usePathname();

  return (
    <nav className={styles.nav}>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <Link
              href={link.path}
              className={`${pathName === link.path ? styles.active : ""}`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
