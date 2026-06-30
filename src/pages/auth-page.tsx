import { useState } from "react";
import "@styles/auth.css"
import { FormLogin } from "@components/Form";

function AuthPage(){
    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const onClickHandler = ()=>{};
    return (
        <section className="auth-page">
            <FormLogin  login={login} 
                        setLogin={setLogin}
                        password={password}
                        setPassword={setPassword}
                        onClick={onClickHandler}
                        />
            
        </section>
    );
}


export default AuthPage;