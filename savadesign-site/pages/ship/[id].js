import Head from "next/head";
import { carousel } from "../../data/carousel";
import { jsonify } from "../../middleware/jsonify";
import classes from "../../styles/SingleShip.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import ImageSlider from "../../components/imageSlider/ImageSlider";
const Ships = ({ singleItem }) => {
  const { title, text, image } = singleItem;
  const router = useRouter();
  return (
    <>
      <Head>
        <title>SavaDesign | Ship | {title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={classes.container}>
        <div className={classes.header}>
          <h1>{title}</h1>
          <div className={classes.dash}></div>
        </div>
        <div className={classes.introImage}>
          <ImageSlider images={image}/>
          <Image src={image[0]} layout="fill" />
        </div>
        <div className={classes.content}>
          <div className={classes.text}>
            <p>{text}</p>
            <button onClick={() => router.push("/#projects")}>Back</button>
          </div>
          
        </div>
      </div>
    </>
  );
};
export default Ships;

export const getStaticProps = (context) => {
  const id = context.params.id;
  const [singleItem] = carousel.filter((item) => {
    return item._id === id;
  });

  return {
    props: {
      singleItem: jsonify(singleItem),
    },
    revalidate: 3600,
  };
};

export const getStaticPaths = () => {
  return {
    paths: carousel.map((item) => {
      return { params: { id: item._id.toString() } };
    }),
    fallback: false,
  };
};
