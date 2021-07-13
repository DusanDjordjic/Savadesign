import classes from "./IntroGrid.module.scss";
import Link from "next/link";
import src1 from "../../public/grid/image1.png";
import src2 from "../../public/grid/image2.png";
import src3 from "../../public/grid/image3.png";
import src4 from "../../public/grid/image4.png";
import src5 from "../../public/grid/image5.png";
import Image from "next/image";
const IntroGrid = () => {
  return (
    <div className={classes.container}>
      <div className={classes.image1}>
        <Image src={src1} layout="responsive" />
        <Link href="/#projects">
          <a>
            <h2>Explore Our Work</h2>
          </a>
        </Link>
      </div>
      <div className={classes.image2}>
        <Image src={src2} layout="responsive" />
        <Link href="/#contact">
          <a>
            <h2>Get In Touch With Us</h2>
          </a>
        </Link>
      </div>
      <div className={classes.image3}>
        <Image src={src3} layout="responsive" />
        <Link href="https://www.linkedin.com/company/savadesign-d-o-o/">
          <a>
            <h2>Follow Us On LinkedIn</h2>
          </a>
        </Link>
      </div>
      <div className={classes.image4}>
        <Image src={src4} layout="responsive" />
        <Link href="https://www.youtube.com/channel/UCFUbgpf3MGoxatBDNvV82dQ">
          <a>
            <h2>Take A Look At Our Youtube Chanel</h2>
          </a>
        </Link>
      </div>
      <div className={classes.image5}>
        <Image src={src5} layout="responsive" />

        <Link href="/sd-nautilus/command/General%20Information">
          <a>
            <h2>Start Using Our Plugin</h2>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default IntroGrid;
