import Footer from "./components/Footer"
import Header from "./components/Header"
import PageWrapper from "./components/Wrapper"

function App() {

  return (
    <div className="App">
      <PageWrapper>
        <Header/>
        <Filter/>
        <Footer/>
      </PageWrapper>  
    </div>
  )
}

export default App
