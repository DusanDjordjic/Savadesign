import { FaPenNib, FaHandshake } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { VscJson } from 'react-icons/vsc'
import Card from "./Card";
import classes from "./CardContainer.module.scss";
const CardContainer = ({ data }) => {
  const arr = [<FaPenNib />, <BsPeopleFill />, <VscJson />];
  data = data.map((item, index) => {
    return { ...item, icon: arr[index] };
  });
  return (
    <>
      <div className={classes.cardContainer}>
        {data.map((item, index) => {
          return <Card key={index} {...item} />;
        })}
      </div>
    </>
  );
};
export default CardContainer;
