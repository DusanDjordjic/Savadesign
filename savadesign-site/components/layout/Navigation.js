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
            <li>
              <Link href="/#start" onClick={() => console.log("hi")}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/#wwd" onClick={() => setNavbarToggled(false)}>
                What we do
              </Link>
            </li>
            <li>
              <Link href="/#hww" onClick={() => setNavbarToggled(false)}>
                How we work
              </Link>
            </li>
            <li>
              <Link href="/#projects" onClick={() => setNavbarToggled(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/#contact" onClick={() => setNavbarToggled(false)}>
                Contact
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
