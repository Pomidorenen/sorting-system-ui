import styles from "./input.module.css";


function InputForm({setValue, value, title, className, type, ...props}: Input.IInputFormProps){
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        props.onChange && props.onChange(e);
    };
    return (
        <div className={styles["input-form"]}>
            <span className={styles["input-form-title"]}>{title}</span>
            <input 
                className={[styles["input-form__input"],className].join(" ")} 
                value={value}
                onChange={onChangeHandler}
                type={type}
                placeholder="aa"
                {...props}/>
        </div>
    );
}


export default InputForm;