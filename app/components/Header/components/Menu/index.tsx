"use client";

import styles from "./menu.module.scss";
import { Menu, X } from "react-feather";
import { Fragment, useState } from "react";
import MobileNav from "../MobileNav";

const MenuBtn = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    if (showNav === true) {
      setShowNav(false);
      document.body.style.overflowY = "auto";
    } else {
      setShowNav(true);
      document.body.style.overflowY = "hidden";
    }
  };

  return (
    <Fragment>
      <div className={styles.menu} onClick={toggleNav}>
        {showNav ? <X /> : <Menu />}
      </div>
      {showNav && <MobileNav />}
    </Fragment>
  );
};
export default MenuBtn;
