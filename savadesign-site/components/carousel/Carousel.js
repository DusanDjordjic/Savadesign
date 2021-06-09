import { useState, useEffect } from "react";
import CarouselItem from "./CarouselItem";
import classes from "./Carousel.module.scss";
const Carousel = ({ data }) => {
  return (
    <section className={classes.carousel}>
      <CarouselItem data={data} />
    </section>
  );
};

export default Carousel;
