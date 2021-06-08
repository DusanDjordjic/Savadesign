import Link from "next/link";
import {useState, useEffect} from 'react';
import { FaBars } from "react-icons/fa";
import classes from "./Navigation.module.scss";

const Navigation = () => {
  const [navbarActive, setNavbarActive] = useState(false);
  const changeNavbarBackground = () => {
    if(window.scrollY >= 100){
      setNavbarActive(true);
    }else{
      setNavbarActive(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', changeNavbarBackground);
    return () => {
      window.removeEventListener('scroll', changeNavbarBackground);
    }
  })
  return (
    <nav>
      <div className={`${classes.navContainer} ${navbarActive ? classes.active : ''}`}>
        <h1>Logo</h1>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
        <button className={classes.navButton}>
          <FaBars />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
