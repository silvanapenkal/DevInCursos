import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useUserName } from "../../hooks/useDevinCourseContext";

export const Header = () => {
    const navigate = useNavigate();

    const name = useUserName();
    
    return (
    <header id="header">
        <div className="headerDiv">
            <div id="logo">
                <img src="/src/assets/logo.svg"></img>
                <h1>DevInCursos</h1>
            </div>
            <h2>{name?? "Sem nome"}</h2>       
        </div>
    </header>
    )
  }

  export default Header;