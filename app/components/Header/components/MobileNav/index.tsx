"use client";

import Link from "next/link";
import styles from "./mobilenav.module.scss";
import { usePathname } from "next/navigation";
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

const MobileNav = () => {
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
export default MobileNav;
