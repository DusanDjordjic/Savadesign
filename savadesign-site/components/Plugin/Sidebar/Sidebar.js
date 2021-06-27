import { useState } from "react";
import classes from "./Sidebar.module.scss";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";

import Link from "next/link";
const Sidebar = ({ commands }) => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.dropdown}>
        <Group nizItema={commands} />
      </div>
    </div>
  );
};

const Group = ({ nizItema }) => {
  // Dobijem niz objekata
  // Svaki objekat ima title, children, depth

  return (
    <ul className={classes.group}>
      {/* Prolazim kroz niz i za svaki item gledam
      da li ima children ako ima pravim novi grupchild
      i u njemu novu grupu */}
      {nizItema.map((item, index) => {
        if (item.children)
          return <GroupChild item={item} key={index} index={index} />;

        return (
          <li
            key={index}
            className={`${classes.groupItem} ${classes.groupItemBorder}`}
            style={{ marginLeft: 20 }}
          >
            <div className={classes.textContainer}>
              <Link href={item.title}>
                <a>
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

const GroupChild = ({ item, index }) => {
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
      {isChildrenOpen && <Group nizItema={item.children} isActive={true} />}
    </li>
  );
};
export default Sidebar;
