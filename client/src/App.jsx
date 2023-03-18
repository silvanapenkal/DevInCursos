import {Header} from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import CourseDetailsPage from "./pages/CourseDetailsPage/CourseDetailsPage";
import Footer from "./components/Footer/Footer";
import DevinCourseContext from "./DevinCourseContext";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import './index.css'

function App() {

  const [user, setUser] = useState ({
    user:{
      name: "Silvana",
      isAdmin: true
    }
  })

  return (
    <DevinCourseContext.Provider value = {[user, setUser]}>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/home" element={<HomePage/>} />
          <Route path="/teste" element={<CourseDetailsPage/>} />
          <Route path="*" element={<div id="margem">página não encontrada</div>} />
        </Routes>
        <Footer/>
      </div>
    </DevinCourseContext.Provider>
  )
}

export default App;