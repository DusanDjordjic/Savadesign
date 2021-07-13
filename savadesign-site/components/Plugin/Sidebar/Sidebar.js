import { useState } from "react";
import classes from "./Sidebar.module.scss";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/router";
const Sidebar = ({ commands, closeSideBar }) => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.dropdown}>
        <Group nizItema={commands} closeSideBar={closeSideBar} />
      </div>
    </div>
  );
};

const Group = ({ nizItema, closeSideBar }) => {
  // Dobijem niz objekata
  // Svaki objekat ima title, children, depth
  const router = useRouter();
  const handleClick = (e, link) => {
    e.preventDefault();
    router.push(link);
    closeSideBar();
  };
  return (
    <ul className={classes.group}>
      {/* Prolazim kroz niz i za svaki item gledam
      da li ima children ako ima pravim novi grupchild
      i u njemu novu grupu */}
      {nizItema.map((item, index) => {
        if (item.children)
          return (
            <GroupChild
              item={item}
              key={index}
              index={index}
              closeSideBar={closeSideBar}
            />
          );

        return (
          <li
            key={index}
            className={`${classes.groupItem} ${classes.groupItemBorder}`}
            style={{ marginLeft: 20 }}
          >
            <div className={classes.textContainer}>
              <Link href={`/sd-nautilus/command/${item.title}`}>
                <a onClick={(e) => handleClick(e, item.title)}>
                  {item.title}
                  <IoMdArrowDropright className={classes.arrowLink} />
                </a>
              </Link>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const GroupChild = ({ item, index, closeSideBar }) => {
  const [isChildrenOpen, setIsChildrenOpen] = useState(false);
  return (
    <li
      key={index}
      className={
        item.depth !== 0
          ? `${classes.groupItem} ${classes.groupItemBorder}`
          : classes.groupItem
      }
      style={{ marginLeft: 10 }}
      // onMouseEnter={() => setIsChildrenOpen(true)}
      // onMouseLeave={() => setIsChildrenOpen(false)}
    >
      <div
        onClick={() => setIsChildrenOpen(!isChildrenOpen)}
        className={
          isChildrenOpen
            ? `${classes.textContainer} ${classes.textContainerClicked}`
            : classes.textContainer
        }
      >
        <IoMdArrowDropdown
          className={
            isChildrenOpen
              ? `${classes.arrow} ${classes.arrowActive}`
              : classes.arrow
          }
        />
        <p>{item.title}</p>
      </div>
      {isChildrenOpen && (
        <Group
          nizItema={item.children}
          isActive={true}
          closeSideBar={closeSideBar}
        />
      )}
    </li>
  );
};
export default Sidebar;
