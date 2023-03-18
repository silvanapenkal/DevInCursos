import "./login.css";
import { useState, useEf } from "react";

function Login() {
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");

    const handleChangeLogin = (event) => {
        setLogin(event.target.value);
    };

    const handleChangePassword = (event) => {
        setSenha(event.target.value);
    };
        
    const handleClick = () => {
        onClick(login,senha);
    };

    return (
        <div id="login">
            <input type="text" placeholder="Digite seu login" onChange={handleChangeLogin}/>
            <input type="password" placeholder="Digite sua senha" onChange={handleChangePassword}/>
            <button onClick={handleClick}>Entrar</button>
        </div>
    )
}

export default Login;