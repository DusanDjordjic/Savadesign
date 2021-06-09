import { useState, useEffect } from "react";
import CarouselItem from "./CarouselItem";
import classes from "./Carousel.module.scss";
const Carousel = ({ data }) => {
  const [crouselItems, setCarouselItems] = useState(data);
  const [index, setIndex] = useState(0);

  return (
    <section className={classes.carousel}>
      <CarouselItem key={index} data={data} />
    </section>
  );
};

export default Carousel;
