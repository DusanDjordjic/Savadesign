import Link from 'next/link';
import { useState } from 'react';
import classes from './FloatingLinks.module.scss';
import { IoMdArrowDropright } from "react-icons/io";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { RiShipFill } from "react-icons/ri";
const FloatingLinks = () => {
    const [isLinksActive, setIsLinksActive] = useState(true);
    return <div className={classes.floatingLinksContainer}>
        <ul className={isLinksActive ? classes.activeUl : classes.inactiveUl}>
            <li className={classes.youtube}>
                <Link href="https://www.youtube.com/channel/UCFUbgpf3MGoxatBDNvV82dQ">
                    <a>
                        <FaYoutube/>
                    </a>
                </Link>
            </li>
            <li className={classes.food}>
                <Link href="https://www.food4rhino.com/en/app/sdnautilus">
                    <a>
                        <RiShipFill/>
                    </a>
                </Link>
            </li>
            <li className={classes.linkedin}>
                <Link href="https://www.linkedin.com/company/savadesign-d-o-o/">
                    <a>
                        <FaLinkedinIn/>
                    </a>
                </Link>
            </li>
        </ul>
        <button className={isLinksActive ? classes.activeButton : classes.inactiveButton}
        onClick={() => setIsLinksActive(!isLinksActive)}><IoMdArrowDropright/></button>
    </div>
}

export default FloatingLinks