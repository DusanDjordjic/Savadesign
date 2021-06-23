import Link from "next/link";
import classes from "./Card.module.scss";
const Card = ({ icon, title, text, link }) => {
  return (
    <div className={classes.card}>
      {icon}
      <h3>{title}</h3>
      <p>{text}</p>
      {link ? (
        <Link href={link}>
          <a>Learn More</a>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};
export default Card;
