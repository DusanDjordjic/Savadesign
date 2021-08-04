import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import classes from "../styles/Home.module.scss";
import CardContainer from "../components/cards/CardContainer";
import Carousel from "../components/carousel/Carousel";
import { cards } from "../data/cards";
import { carousel } from "../data/carousel";
import { jsonify } from "../middleware/jsonify";
import { IoIosArrowUp } from "react-icons/io";
import FloatingLinks from "../components/floatingLinks/FloatingLinks";
import { IoMdMail } from "react-icons/io";
import { FiCopy } from "react-icons/fi";
import { HiOfficeBuilding } from 'react-icons/hi';
import { FaPhone } from "react-icons/fa";
import IntroGrid from "../components/IntroGrid/introgrid";
import MessageBox from "../components/layout/MessageBox";
import LocationMap from "../components/locationMap/LocationMap";
const Home = (props) => {
  const [toTop, setToTop] = useState(false);
  const [msgBox, setMsgBox] = useState(false);
  const [msgText, setMsgText] = useState("");
  const displayMessageBox = (text) => {
    setMsgBox(true);
    setMsgText(text);
  };
  const copyToClipboard = (e) => {
    navigator.clipboard.writeText(e.target.innerText);
    displayMessageBox("Copied to Clipboard");
  };
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
  useEffect(() => {
    const timer = setTimeout(() => {
      setMsgBox(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [msgBox]);
  return (
    <>
      <Head>
        <title>SavaDesign | Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shotcut icon" type="image/ico" href="/logo.ico" />
      </Head>
      <div className={classes.container}>
        <div className={`${classes.toTop} ${toTop ? classes.topActive : ""}`}>
          <Link href="/#start">
            <a>
              <IoIosArrowUp />
            </a>
          </Link>
        </div>
        <div id="start">
          <IntroGrid />
        </div>
        {/* WHAT WE DO */}
        <div className={`${classes.wwdSec} ${classes.sectionLayout}`} id="wwd">
          <div className={classes.sectionIntro}>
            <p className={classes.upper}>what we do</p>

            <h2>INVOLVED FROM DESIGN TO DELIVERY</h2>
            <div className={classes.dash}></div>
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate qui illum magnam atque odit est voluptatum ratione
              esse, commodi nemo reiciendis ut quod nobis. Dolor deleniti illo
              assumenda nostrum hic.
            </p> */}
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
              Our goal is to constantly shorten the delivery times. Curently we
              can offer a full hull workshop package for a 110m inland tanker
              for approx. 4-6 weeks after receiving class documentation, and
              first units ready for cutting in a week.
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
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate qui illum magnam atque odit est voluptatum ratione
              esse.
            </p> */}
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
          id="contact"
        >
          <div className={classes.sectionIntro}>
            <p className={classes.upper}>contact</p>
            <h2>GET IN TOUCH WITH US</h2>
            <div className={`${classes.dash} ${classes.dashgreen}`}></div>
          </div>
          <div className={classes.content}>
            <div className={classes.contactInfo}>
              <div>
                <h3>Office Address</h3>
                <p title="Copy to clipboard" onClick={(e) => copyToClipboard(e)}>
                  <HiOfficeBuilding /> Svetog dimitrija 19G, Sremska Mitrovica <FiCopy className={classes.copyIcon}/>
                </p>
              </div>
              <div>
                <h3>Phone Number</h3>
                <p title="Copy to clipboard" onClick={(e) => copyToClipboard(e)}>
                  <FaPhone /> +381-64-309-45-43 <FiCopy className={classes.copyIcon}/>
                </p>
              </div>
              <div>
                <h3>Email Address</h3>
                <p title="Copy to clipboard" onClick={(e) => copyToClipboard(e)}>
                  <IoMdMail /> gbudecevic@yahoo.com <FiCopy className={classes.copyIcon}/>
                </p>
              </div>
            </div>
            <LocationMap displayMessageBox={displayMessageBox} />
          </div>
        </div>
      </div>

      <FloatingLinks />
      <MessageBox visible={msgBox} text={msgText} />
    </>
  );
};
export default Home;

export const getStaticProps = () => {
  return {
    props: {
      cards: jsonify(cards),
      carousel: jsonify(carousel),
    },
    revalidate: 60,
  };
};
