import styles from "./input.module.css";
import SearchIcon from "@icons/search-icon.svg";


function InputSearch({value, setValue, className, ...props}:Input.IInputProps){
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        props.onChange && props.onChange(e);
    };
    return (<div className={styles["input-search"]}>
            <img className={styles["input-search__image"]} src={SearchIcon} alt="search"/>
            <input 
                className={[styles["input-search__input"],className].join(" ")}
                value={value}
                onChange={onChangeHandler}
                placeholder="Поиск..."
                type="search"/>
        </div>);
}


export default InputSearch;