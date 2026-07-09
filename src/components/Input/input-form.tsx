import styles from "./input.module.css";


function InputForm({value, title,onChange, className, type, ...props}: Input.IInputFormProps){

    return (
        <div className={styles["input-form"]}>
            <span className={styles["input-form-title"]}>{title}</span>
            <input 
                className={[styles["input-form__input"],className].join(" ")} 
                value={value}
                onChange={onChange}
                type={type}
                placeholder="aa"
                {...props}/>
        </div>
    );
}


export default InputForm;