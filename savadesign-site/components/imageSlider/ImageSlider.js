import classes from "./ImageSlider.module.scss";
import { useState } from "react";
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import Image from "next/image";
const ImageSlider = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const inc = () => {
    setActiveIndex(activeIndex + 1);
    if (activeIndex == images.length - 1) setActiveIndex(0);
  };
  const dec = () => {
    setActiveIndex(activeIndex - 1);
    if (activeIndex == 0) setActiveIndex(images.length - 1);
  };
  return (
    <div className={classes.slider}>
      <div className={classes.imageContainer}>
        <div className={classes.overlay}>
          <button onClick={dec}>
            <IoMdArrowDropleft />
          </button>
          <button onClick={inc}>
            <IoMdArrowDropright />
          </button>
        </div>
        {images.map((item, index) => {
          return (
            <div
              key={index}
              className={
                activeIndex == index
                  ? `${classes.imageWrapper} ${classes.active}`
                  : classes.imageWrapper
              }
            >
              <Image src={item} className={classes.image} layout="fill" />
            </div>
          );
        })}
      </div>
      <div className={classes.dotConatiner}>
        {images.map((item, index) => {
          return (
            <div
              key={index}
              className={
                activeIndex == index
                  ? `${classes.dot} ${classes.active}`
                  : classes.dot
              }
              onClick={() => setActiveIndex(index)}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlider;
