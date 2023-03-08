import {Header} from "./components/Header";
import CourseWrapper from "./components/CourseWrapper";
import {Footer} from "./components/Footer";

import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Header />
      <CourseWrapper>
        <HomePage />
      </CourseWrapper>
      <Footer />
    </>
  );
}

export default App;