import Head from "next/head";
import Image from "next/image";
import classes from "../styles/Home.module.scss";
import CardContainer from "../components/cards/CardContainer";
import { cards } from "../data/cards";
const Home = (props) => {
  console.log("home props", props);
  return (
    <div className={classes.container}>
      <div className={classes.introImg}></div>
      <div className={`${classes.aboutSec} ${classes.sectionLayout}`}>
        <div className={classes.sectionIntro}>
          <h2>INVOLVED FROM DESIGN TO DELIVERY</h2>
          <div className={classes.dashwhite}></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            qui illum magnam atque odit est voluptatum ratione esse, commodi
            nemo reiciendis ut quod nobis. Dolor deleniti illo assumenda nostrum
            hic.
          </p>
        </div>
        <CardContainer data={props.cards} />
      </div>
    </div>
  );
};
export default Home;

export const getStaticProps = () => {
  console.log(cards);
  return {
    props: {
      cards,
    },
  };
};
