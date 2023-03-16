import {Header} from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import CourseDetailsPage from "./pages/CourseDetailsPage/CourseDetailsPage";
import Footer from "./components/Footer/Footer";
import DevinCourseContext from "./DevinCourseContext";
import { useState } from "react";
import {useUserInfo} from "./DevinCourseContext";
import { Routes, Route } from "react-router-dom";

function App() {

  const [name, setName] = useState({ name: "Silvana" });
  const [isAdmin, setAdmin] = useState({ isAdmin: true });
  const teste = useUserInfo();
  return (
    <DevinCourseContext.Provider value = {[name, setName, isAdmin, setAdmin]}>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/home" element={<HomePage/>} />
          <Route path="/teste" element={<CourseDetailsPage/>} />
        </Routes>
        <Footer/>
      </div>
    </DevinCourseContext.Provider>
  )
}

export default App;