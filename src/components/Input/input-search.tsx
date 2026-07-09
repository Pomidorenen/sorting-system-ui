import styles from "./input.module.css";
import { IconSearch } from '@tabler/icons-react';


function InputSearch({value, onChange, className, ...props}:Input.IInputProps){
    return (<div className={[styles["input-search"],className].join(" ")}>
                <div  className={styles["input-search__icon"]}>
                    <IconSearch stroke={2}/>
                </div>
                <input 
                    className={styles["input-search__input"]}
                    value={value}
                    onChange={onChange}
                    placeholder="Поиск..."
                    type="search"/>
        </div>);
}


export default InputSearch;