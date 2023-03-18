/// Global includes ///
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


/// Components to include /// 
import Header from "./Components/Header";
import Footer from "./Components/Footer"; 
import About from "./Components/About"; 
import Home from "./Components/Home"; 
import Portfolio from "./Components/Portfolio"; 
import Resume from "./Components/Resume"; 
import Contact from "./Components/Contact"; 



function App() {

  return (
  <div>
  <Header />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='about' element={ <About />} />
        <Route path='portfolio' element={ <Portfolio />} />
        <Route path='resume' element={ <Resume />} />
        <Route path='contactme' element={ <Contact />} />
      </Routes>
    </BrowserRouter>
  <Footer />
    </div>
  )
}



export default App;
