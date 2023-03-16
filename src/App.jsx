import {Header} from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import DevinCourseContext from "./DevinCourseContext";
import { useState } from "react";

function App() {

  const [name, setName] = useState({ name: "Silvana" });
  const [isAdmin, setAdmin] = useState({ isAdmin: "true" });
  return (
    <DevinCourseContext.Provider value = {[name, setName, isAdmin, setAdmin]}>
      <div className="App">
        <Header/>
        <HomePage/>
        <Footer/>
      </div>
    </DevinCourseContext.Provider>
  )
}

export default App;