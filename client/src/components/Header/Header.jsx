import "./Header.css";
import { useUserName } from "../../DevinCourseContext";

export const Header = () => {
    const name = useUserName();
    console.log(name);
    return (
    <header>
        <div className="headerDiv">
            <img src="/src/assets/logo.svg"></img>
            <h1>DevInCursos</h1>
            <h2>{name?? "Sem nome"}</h2>
        </div>
    </header>
    )
  }

  export default Header;