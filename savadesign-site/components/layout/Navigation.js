import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import classes from "./Navigation.module.scss";
import logoSrc from "../../public/logo.png";
const Navigation = () => {
  const [navbarActive, setNavbarActive] = useState(false);
  const [navbarToggled, setNavbarToggled] = useState(false);

  const router = useRouter();

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
  const handleClick = (e, link) => {
    e.preventDefault();
    setNavbarToggled(false);
    router.push(link);
  };
  return (
    <nav>
      <div
        className={`${classes.navContainer} ${
          navbarActive ? classes.active : ""
        }`}
      >
        <Link href="/">
          <a>
            <h1>
              <Image src={logoSrc} alt="Savadesign logo" />
            </h1>
          </a>
        </Link>
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
              <button onClick={(e) => handleClick(e, "/#start")}>Home</button>
            </li>
            <li>
              <button onClick={(e) => handleClick(e, "/#wwd")}>
                What we do
              </button>
            </li>
            <li>
              <button onClick={(e) => handleClick(e, "/#hww")}>
                How we work
              </button>
            </li>
            <li>
              <button onClick={(e) => handleClick(e, "/#projects")}>
                Projects
              </button>
            </li>
            <li>
              <button onClick={(e) => handleClick(e, "/#contact")}>
                Contact
              </button>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
