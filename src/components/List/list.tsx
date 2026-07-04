import styles from "./list.module.css";
import { IconZeroConfig } from '@tabler/icons-react';


function List({isIcon = false,items,className,...props}:List.IListProps){
    return (<ul className={[styles["list"],className].join(" ")} {...props}>
            {items.map(({text,icon},i)=>{
                return <li className={styles["list-item"]}  key={i}>
                        {(isIcon) && <div className={styles["list-item__icon"]}>
                                        {(icon)?icon:<IconZeroConfig stroke={2} />}
                                    </div>}
                        <span className={styles["list-item__text"]}>
                            {text}
                        </span>
                    </li>;
            })}
        </ul>);
}

export default List;