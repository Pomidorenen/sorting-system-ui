import SidebarItem from './sidebar-item';
import styles from "./sidebar.module.css";


function Sidebar({items}:Sidebar.ISidebarProps){
    return(
        <nav className={styles["sidebar-container"]}>
            <ul className={styles["sidebar-list"]}>
                {items && items.map((item,i)=><SidebarItem key={i} {...item}/>)}
            </ul>
        </nav>
        );
}


export default Sidebar;