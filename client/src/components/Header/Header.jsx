import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useUserName } from "../../hooks/useDevinCourseContext";

export const Header = () => {
    // const navigate = useNavigate();

    const name = useUserName();
    
    return (
    <header id="header">
        <div className="headerDiv">
            <Link to="/home" className="navbarLogoBox" id="logo">
                <img src="/src/assets/logo.svg" alt="logo do DevInCursos"></img>
                <h1>DevInCursos</h1>
            </Link>
            <h2>{name?? "Sem nome"}</h2>       
        </div>
    </header>
    )
  }

  export default Header;