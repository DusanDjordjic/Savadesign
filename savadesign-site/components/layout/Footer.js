import Link from "next/link";

import classes from "./Footer.module.scss";
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
          <h3>SavaDesign</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            explicabo obcaecati distinctio quam, corrupti quod reiciendis eum
            ab. Ducimus ipsa dolor amet nihil commodi repellat, corporis esse
            ullam cupiditate totam.
          </p>
        </div>
        <div>
          <h3>SavaDesign</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            explicabo obcaecati distinctio quam, corrupti quod reiciendis eum
            ab. Ducimus ipsa dolor amet nihil commodi repellat, corporis esse
            ullam cupiditate totam.
          </p>
        </div>
      </div>
      <p className={classes.copy}>
        <span>&copy;</span> SavaDesign {`${new Date().getFullYear()}`}
      </p>
    </footer>
  );
};

export default Footer;
