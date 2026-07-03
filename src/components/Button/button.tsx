import {isValidElement} from "react";
import styles from "./button.module.css";


function Button({children,className, ...props}:Button.IButtonProps){
    const btnCls = isValidElement(children)?[styles.button,styles["button-icon"]]:[styles.button];
    return  (<button    className={([...btnCls,className]).join(" ")}
                        {...props}>
                {children}
            </button>);
}

export default Button;