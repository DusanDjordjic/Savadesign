import CarouselCard from "./CarouselCard";
import classes from "./CarouselItem.module.scss";
const CarouselItem = ({ data }) => {
  return (
    <div className={classes.carouselItem}>
      {data.map((item, index) => {
        return <CarouselCard key={index} data={item} />;
      })}
    </div>
  );
};

export default CarouselItem;
