import classes from './Card.module.scss'
const Card = ({ icon, title, text }) => {
  return (
    <div className={classes.card}>
      {icon}
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};
export default Card;
