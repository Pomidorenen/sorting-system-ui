import styles from "./input.module.css";

function InputDate({title,className,onChange,value,...props}:Input.IInputProps){
    return <div className={[styles["input-date"],className].join(" ")}>
        <span className={styles["input-date__title"]}>{title}</span>
        <input className={styles["input-date__input"]} type="date" onChange={onChange} value={value} {...props}/>
    </div>
}

export default InputDate;