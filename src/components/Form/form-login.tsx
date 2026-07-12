import { InputForm } from "@components/Input";
import KeyIcon from "@icons/key-icon.svg";
import styles from "./form.module.css";
import { onChangeWrapper } from "@utils/eventHandlers";

function Form({login, setLogin, password, setPassword, onClick}:Form.IFormLoginProps){
    return (
        <form className={styles["form-login"]}>
            <img src={KeyIcon}/>
            <h2>Введите логин и пароль</h2>
            <InputForm value={login} onChange={onChangeWrapper(setLogin)} placeholder="Логин" title="Логин"/>
            <InputForm value={password} onChange={onChangeWrapper(setPassword)} placeholder="Пароль" title="Пароль" type="password"/>
            <button className={styles["form-login__button"]} type="submit" onClick={onClick}>
                Войти
            </button>
        </form>
        );
}


export default Form;