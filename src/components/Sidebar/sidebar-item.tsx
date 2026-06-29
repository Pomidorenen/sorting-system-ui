import { Link } from "react-router";
import styles from "./sidebar.module.css";
import defaultIcon from '@icons/default.svg';

function SidebarItem({image,link,title}:Sidebar.ISidebarItem ){
    return (
        <Link to={link ? link: "/"} className={styles["sidebar-list__item"]}>
            <img src={image ? image : defaultIcon} alt='default-logo'/>
            <span>{title ? title : "default text"}</span> 
        </Link>
    );
}



export default SidebarItem;