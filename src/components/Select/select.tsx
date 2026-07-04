import styles from "./select.module.css";

function Select({title, options, className,style, ...props}:Select.ISelectProps){
    return(<div className={[styles["select-container"],className].join(" ")} style={style}>
            {title?<span className={styles["select-title"]}>{title}</span>:<></>}
            <select className={styles["select-content"]} {...props}>
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