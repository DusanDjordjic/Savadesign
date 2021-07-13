import classes from "./PersonCard.module.scss";
import Image from "next/image";
import src from "../../public/people/owner.png";
import { IoMdMail } from "react-icons/io";
import { FaPhone, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
const PersonCard = ({ displayMessageBox }) => {
  const copyToClipboard = (e) => {
    navigator.clipboard.writeText(e.target.innerText);
    displayMessageBox("Copied to Clipboard");
  };
  return (
    <div className={classes.personCard}>
      <div className={classes.imageBox}>
        <Image src={src} />
      </div>
      <p className={classes.name}>Goran Budečevič</p>
      <p className={classes.position}>Owner</p>
      <div className={classes.footer}>
        <p title="Copy to clipboard" onClick={(e) => copyToClipboard(e)}>
          <IoMdMail /> gbudecevic@yahoo.com
        </p>
        <p title="Copy to clipboard" onClick={(e) => copyToClipboard(e)}>
          <FaPhone /> +381-64-309-45-43
        </p>
      </div>
      <div className={classes.finalLink}>
        <Link href="https://www.linkedin.com/company/savadesign-d-o-o/">
          <a>
            <FaLinkedinIn />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default PersonCard;
