import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import classes from "./Navigation.module.scss";

const Navigation = () => {
  const [navbarActive, setNavbarActive] = useState(false);
  const [navbarToggled, setNavbarToggled] = useState(false);
  const changeNavbarBackground = () => {
    if (window.scrollY >= 100) {
      setNavbarActive(true);
    } else {
      setNavbarActive(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavbarBackground);
    return () => {
      window.removeEventListener("scroll", changeNavbarBackground);
    };
  });

  const router = useRouter();

  return (
    <nav>
      <div
        className={`${classes.navContainer} ${
          navbarActive ? classes.active : ""
        }`}
      >
        <h1>Logo</h1>
        <button
          className={classes.navButton}
          onClick={() => setNavbarToggled(true)}
        >
          <FaBars />
        </button>
        <ul className={`${navbarToggled ? classes.active : ""}`}>
          <div>
            <button
              className={classes.closeOverlay}
              onClick={() => setNavbarToggled(false)}
            >
              <ImCross />
            </button>
            <li className={router.pathname == "/" ? classes.linkActive : ""}>
              <Link href="/">Home</Link>
            </li>
            <li
              className={router.pathname == "/about" ? classes.linkActive : ""}
            >
              <Link href="/about">About</Link>
            </li>
            <li
              className={router.pathname == "/blog" ? classes.linkActive : ""}
            >
              <Link href="/blog">Blog</Link>
            </li>
            <li
              className={
                router.pathname == "/contact" ? classes.linkActive : ""
              }
            >
              <Link href="/contact">Contact</Link>
            </li>
            <li
              className={router.pathname == "/ships" ? classes.linkActive : ""}
            >
              <Link href="/ships">Ships</Link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
