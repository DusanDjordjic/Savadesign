import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import classes from "../styles/Home.module.scss";
import CardContainer from "../components/cards/CardContainer";
import Carousel from "../components/carousel/Carousel";
import { cards } from "../data/cards";
import { carousel } from "../data/carousel";
import { jsonify } from "../middleware/jsonify";
import { IoIosArrowUp, IoMdMail } from "react-icons/io";
import { FaPhone, FaLinkedinIn } from "react-icons/fa";
const Home = (props) => {
  const [toTop, setToTop] = useState(false);
  const handleScroll = () => {
    if (window.scrollY >= 500) {
      setToTop(true);
    } else {
      setToTop(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <>
      <Head>
        <title>SavaDesign | Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={classes.container}>
        <div className={`${classes.toTop} ${toTop ? classes.topActive : ""}`}>
          <Link href="/#start">
            <IoIosArrowUp />
          </Link>
        </div>
        <div className={classes.introImg} id="start"></div>
        {/* WHAT WE DO */}
        <div className={`${classes.wwdSec} ${classes.sectionLayout}`} id="wwd">
          <div className={classes.sectionIntro}>
            <p className={classes.upper}>what we do</p>

            <h2>INVOLVED FROM DESIGN TO DELIVERY</h2>
            <div className={classes.dash}></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate qui illum magnam atque odit est voluptatum ratione
              esse, commodi nemo reiciendis ut quod nobis. Dolor deleniti illo
              assumenda nostrum hic.
            </p>
          </div>
          <div className={classes.content}>
            <CardContainer data={props.cards} />
          </div>
        </div>
        {/* HOW WE WORK */}
        <div className={`${classes.hwwSec} ${classes.sectionLayout}`} id="hww">
          <div className={classes.sectionOverlay}></div>
          <div className={classes.sectionIntro}>
            <p className={classes.upper}>how we work</p>
            <h2>OUR PHILOSOPHY</h2>
            <div className={`${classes.dash} ${classes.dashgreen}`}></div>
          </div>
          <div className={classes.content}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate maiores nam dolorem, eius quas voluptatum illum saepe
              ipsa eaque facere at nesciunt facilis iure perspiciatis fuga,
              eveniet odit temporibus repellendus itaque aspernatur sit aut
              veniam dolores dolor! Ducimus, voluptas possimus?
            </p>
          </div>
        </div>
        {/* PROJECTS */}
        <div
          className={`${classes.projectsSec} ${classes.sectionLayout}`}
          id="projects"
        >
          <div className={classes.sectionIntro}>
            <p className={classes.upper}>projects</p>
            <h2>EXPLORE OUR PORTFOLIO</h2>
            <div className={`${classes.dash} ${classes.dashgreen}`}></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate qui illum magnam atque odit est voluptatum ratione
              esse.
            </p>
          </div>
          <div className={classes.content}>
            <Carousel data={props.carousel} />
          </div>
        </div>
        {/* IMAGE */}
        <div className={classes.imageSec}></div>
        {/* CONTACT */}
        <div
          className={`${classes.contactSec} ${classes.sectionLayout}`}
          id="projects"
        >
          <div className={classes.sectionIntro}>
            <p className={classes.upper}>contact</p>
            <h2>GET IN TOUCH WITH US</h2>
            <div className={`${classes.dash} ${classes.dashgreen}`}></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate qui illum magnam atque odit est voluptatum ratione
              esse.
            </p>
          </div>
          <div className={classes.content}>
            <div className={classes.contactCard}>
              <div className={classes.ccHeader}>
                <p>Naval architec</p>
              </div>
              <div className={classes.ccText}>
                <h4>Marko Markovic</h4>
                <ul>
                  <li>
                    <p>
                      <IoMdMail /> example@gmail.com
                    </p>
                  </li>
                  <li>
                    <p>
                      <FaPhone /> +38161-234-56-54
                    </p>
                  </li>
                </ul>
              </div>
              <div className={classes.ccFooter}>
                <Link href="https://www.linkedin.com/feed/">
                  <a>
                    <FaLinkedinIn />
                  </a>
                </Link>
              </div>
            </div>
            <div className={classes.contactCard}>
              <div className={classes.ccHeader}>
                <p>Naval architec</p>
              </div>
              <div className={classes.ccText}>
                <h4>Marko Markovic</h4>
                <ul>
                  <li>
                    <p>
                      <IoMdMail /> example@gmail.com
                    </p>
                  </li>
                  <li>
                    <p>
                      <FaPhone /> +38161-234-56-54
                    </p>
                  </li>
                </ul>
              </div>
              <div className={classes.ccFooter}>
                <Link href="https://www.linkedin.com/feed/">
                  <a>
                    <FaLinkedinIn />
                  </a>
                </Link>
              </div>
            </div>
            <div className={classes.contactCard}>
              <div className={classes.ccHeader}>
                <p>Naval architec</p>
              </div>
              <div className={classes.ccText}>
                <h4>Marko Markovic</h4>
                <ul>
                  <li>
                    <p>
                      <IoMdMail /> example@gmail.com
                    </p>
                  </li>
                  <li>
                    <p>
                      <FaPhone /> +38161-234-56-54
                    </p>
                  </li>
                </ul>
              </div>
              <div className={classes.ccFooter}>
                <Link href="https://www.linkedin.com/feed/">
                  <a>
                    <FaLinkedinIn />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;

export const getStaticProps = () => {
  console.log(cards);
  return {
    props: {
      cards: jsonify(cards),
      carousel: jsonify(carousel),
    },
    revalidate: 60,
  };
};
