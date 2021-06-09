import Image from "next/image";
import classes from "./CarouselCard.module.scss";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";
const CarouselCard = ({ data }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.carouselCard}>
        <div className={classes.projectImg}>
          <Image src={data.image} layout="fill" />
        </div>
        <div className={classes.cardText}>
          <h4>{data.title}</h4>
          <p className={classes.date}>{data.date.slice(0, 4)}</p>
          <p>{data.text}</p>
        </div>
        <div className={classes.cardFooter}>
          <Link href={`/ship/${data._id}`}>
            <a>
              More Info <IoMdArrowDropright />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
