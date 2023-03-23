/* eslint-disable no-unused-vars */
import "./login.css";
import { useState } from "react";
import { apiService } from "../../../services/api";
import { useNavigate } from "react-router-dom";
import { useSetUserInfo } from "../../hooks/useDevinCourseContext";

function Login() {
    const navigate = useNavigate();
    const setUserInfo = useSetUserInfo();

    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState(null);
      
    const handleClick = async () => {
        setError(null);
        const response = await apiService.get(
        `/users?login=${login}&senha=${senha}`);
        if (response?.data?.leght) {
            const {name, isAdmin} = response.data[0];
            setUserInfo({
                login,
                isAdmin,
            });
            navigate("/home");
        } else {
            setUserInfo();
            setError("Login e/ou senha inválidados")
        }
    };

    return (
        <div id="login">
            <input type="text" placeholder="Digite seu login" onChange={(event)=>setLogin(event.target.value)}/>
            <input type="password" placeholder="Digite sua senha" onChange={(event)=>setSenha(event.target.value)}/>
            <button onClick={handleClick}>Entrar</button>
        </div>
    )
}

export default Login;