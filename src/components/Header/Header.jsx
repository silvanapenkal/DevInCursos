import "./Header.css";
import { useDevinCourseContext } from "../../DevinCourseContext";

export const Header = () => {
    const userInfo = useDevinCourseContext();
    return (
    <header>
        <div className="headerDiv">
            <img src="/src/assets/logo.svg"></img>
            <h1>DevInCursos</h1>
            <h2>{userInfo[0]?.name ?? "Sem nome"}</h2>
        </div>
    </header>
    )
  }

  export default Header;