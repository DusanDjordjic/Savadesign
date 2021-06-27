import classes from "../../../styles/Plugin.module.scss";
import Sidebar from "../../../components/Plugin/Sidebar/Sidebar";
import Head from "next/dist/next-server/lib/head";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { commands } from "../../../data/commands";
import { useEffect, useState } from "react";
const Command = ({ commands, text, images }) => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  return (
    <>
      <Head>
        <title>SD Nautilus</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shotcut icon" type="image/ico" href="/logo.ico" />
      </Head>
      <div className={classes.plugin}>
        <div className={classes.container}>
          <div className={classes.layout}>
            <div className={classes.sidebar}>
              <Sidebar commands={commands} />
            </div>

            <div className={classes.mainContent}>
              <ReactMarkdown className={classes.textBox}>{text}</ReactMarkdown>
              <div className={classes.imagesBox}>
                {images.map((image, index) => {
                  return (
                    <div className={classes.imageWrapper} key={index}>
                      <Image
                        src={image}
                        alt={image}
                        width={2}
                        height={1}
                        layout="responsive"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Command;
export const getStaticProps = (context) => {
  const listOfCommands = getLastChildren(commands);
  const [correctItem] = listOfCommands.filter((item) => {
    return item.title === context.params.group;
  });

  return {
    props: {
      commands: commands,
      text: correctItem.text,
      images: correctItem.images,
    },
  };
};
export const getStaticPaths = () => {
  let paths = [];
  paths = getLastChildren(commands);

  paths = paths.map((item) => {
    return {
      params: { group: item.title },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
};

const getLastChildren = (commands, listOfCommands = []) => {
  commands.forEach((item) => {
    if (item.children) {
      getLastChildren(item.children, listOfCommands);
    } else {
      if (item.title) {
        listOfCommands.push(item);
      }
    }
  });
  return listOfCommands;
};
