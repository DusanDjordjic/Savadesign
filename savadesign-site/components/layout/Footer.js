import Link from "next/link";
import { carousel } from "../../data/carousel";
import classes from "./Footer.module.scss";
import { IoMdArrowDropright } from "react-icons/io";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div>
          <h3>SavaDesign</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            explicabo obcaecati distinctio quam, corrupti quod reiciendis eum
            ab. Ducimus ipsa dolor amet nihil commodi repellat, corporis esse
            ullam cupiditate totam.
          </p>
        </div>
        <div>
          <h3>Projects</h3>
          <div className={classes.projectsContainer}>
            {carousel.map((item, index) => {
              return (
                <Link href={`/ship/${item._id}`} key={index}>
                  <a>
                    {item.title} <IoMdArrowDropright />
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
        <div className={classes.navigation}>
          <h3>Navigation</h3>
          <Link href={`/#start`}>
            <a>
              Home <IoMdArrowDropright />
            </a>
          </Link>
          <Link href={`/#wwd`}>
            <a>
              What we do <IoMdArrowDropright />
            </a>
          </Link>
          <Link href={`/#hww`}>
            <a>
              How we work <IoMdArrowDropright />
            </a>
          </Link>
          <Link href={`/#projects`}>
            <a>
              Projects <IoMdArrowDropright />
            </a>
          </Link>
          <Link href={`/sd-nautilus/command/General%20Information`}>
            <a>
              SD-Nautilus <IoMdArrowDropright />
            </a>
          </Link>
          <Link href={`/#contact`}>
            <a>
              Contact <IoMdArrowDropright />
            </a>
          </Link>
        </div>
      </div>
      <p className={classes.copy}>
        &copy; SavaDesign {`${new Date().getFullYear()}`}
      </p>
    </footer>
  );
};

export default Footer;
