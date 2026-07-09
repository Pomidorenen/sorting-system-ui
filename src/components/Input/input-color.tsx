import styles from "./input.module.css";

function InputColor({value, onChange, className,title,...props}:Input.IInputProps){
    return <div className={[styles["input-color"],className].join(" ")}>
        <span className={styles["input-color__title"]}>{title}</span>
        <input className={styles["input-color__input"]} type="color" onChange={onChange} value={value} {...props}/>
    </div>
}

export default InputColor;