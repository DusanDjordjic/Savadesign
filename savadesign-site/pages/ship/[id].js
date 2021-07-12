import Head from "next/head";
import { carousel } from "../../data/carousel";
import { jsonify } from "../../middleware/jsonify";
import classes from "../../styles/SingleShip.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
const Ships = ({ singleItem }) => {
  const { title, text, image, table } = singleItem;
  console.log(text);
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
          <Image src={image} layout="fill" />
        </div>
        <div className={classes.content}>
          <div className={classes.text}>
            <p>{text}</p>
            <button onClick={() => router.push("/#projects")}>Back</button>
          </div>
          <div className={classes.table}>
            <table>
              <tbody>
                {table.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item[0]}</td>
                      <td>{item[1]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
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
