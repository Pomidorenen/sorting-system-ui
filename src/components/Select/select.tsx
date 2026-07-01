import styles from "./select.module.css";

function Select({title, options, className, ...props}:Select.ISelectProps){
    return(<div className={styles["select-container"]}>
            {title?<span className={styles["select-title"]}>{title}</span>:<></>}
            <select className={[styles["select-content"],className].join(" ")} {...props}>
                {options.map(({name,value},i)=>{
                    return (<option className={styles["select-option"]} 
                                    key={i} 
                                    value={value}>
                                        {name}
                                    </option>
                            );
                })}
            </select>
        </div>
    );
}


export default Select;