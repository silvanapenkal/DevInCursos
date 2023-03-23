import {Header} from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import CourseDetailsPage from "./pages/CourseDetailsPage/CourseDetailsPage";
import Footer from "./components/Footer/Footer";
import DevinCourseContext from "./hooks/useDevinCourseContext";
import Login from "./pages/Login/login"
import PageWrapper from "./components/pageWrapper/pageWrapper";
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
        <PageWrapper>
          <Routes>
            <Route path="/home" element={<HomePage/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/course/:id" element={<CourseDetailsPage/>} />
            <Route path="*" element={<div id="margem">página não encontrada</div>} />
          </Routes>
        </PageWrapper>
        <Footer/>
      </div>
    </DevinCourseContext.Provider>
  )
}

export default App;