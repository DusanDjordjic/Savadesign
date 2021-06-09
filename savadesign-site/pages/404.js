import classes from "../styles/404.module.scss";
import Image from "next/image";
import Link from "next/link";
import { carousel } from "../data/carousel";
import { IoMdArrowDropright } from "react-icons/io";
const Error = ({ ships }) => {
  return (
    <div className={classes.error}>
      <div className={classes.container}>
        <div className={classes.errorImg}>
          <Image src="/notfound-ship.png" layout="fill" />
        </div>
        <div className={classes.content}>
          <p className={classes.notfound}>404</p>
          <p>Oops... Looks like the ship you are looking for sailed away</p>
          <div className={classes.ships}>
            <ul>
              {ships.map((item, index) => {
                return (
                  <li key={index}>
                    <Link href={`/ship/${item.id}`}>
                      <a>
                        {item.title} <IoMdArrowDropright />
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <Link href={`/`}>
            <a>
              Go back to home <IoMdArrowDropright />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;

export const getStaticProps = () => {
  return {
    props: {
      ships: carousel.map((item) => {
        return {
          title: item.title,
          id: item._id,
        };
      }),
    },
  };
};
