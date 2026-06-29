import { createPortal } from 'react-dom';
import SidebarItem from './sidebar-item';
import styles from "./sidebar.module.css";


function Sidebar({items}:Sidebar.ISidebarProps){
    return createPortal( 
        <nav className={styles["sidebar-container"]}>
            <ul>
                {items && items.map((item,i)=><SidebarItem key={i} {...item}/>)}
            </ul>
        </nav>,
        document.getElementById("sidebar") as HTMLElement
    );
}


export default Sidebar;