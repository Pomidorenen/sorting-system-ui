import styles from "./input.module.css";
import { IconSearch } from '@tabler/icons-react';


function InputSearch({value, setValue, className, ...props}:Input.IInputProps){
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        props.onChange && props.onChange(e);
    };
    return (<div className={[styles["input-search"],className].join(" ")}>
                <div  className={styles["input-search__icon"]}>
                    <IconSearch stroke={2}/>
                </div>
                <input 
                    className={styles["input-search__input"]}
                    value={value}
                    onChange={onChangeHandler}
                    placeholder="Поиск..."
                    type="search"/>
        </div>);
}


export default InputSearch;