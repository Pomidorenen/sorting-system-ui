import styles from "./input.module.css";

function InputRange({min =0.8,max =1.5,value,step, onChange, className,title,...props}:Input.IInputPropsRange){
    return <div className={[styles["input-range"],className].join(" ")}>
        <span className={styles["input-range__title"]}>{title}</span>
        <input className={styles["input-range__input"]} type="range" onChange={onChange} step={step} min={min} max={max} value={value} {...props}/>
    </div>
}

export default InputRange;