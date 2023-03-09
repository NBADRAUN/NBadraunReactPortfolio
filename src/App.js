/// Global includes ///
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


/// Components to include /// 
import Nav from "./Components/Nav/Nav";
import About from "./Components/About"; 
import Home from "./Components/Home"; 
import Portfolio from "./Components/Portfolio"; 
import Resume from "./Components/Resume"; 
import Contact from "./Components/Contact"; 



function App() {
  return (
  <div>
  <Nav />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='about' element={ <About />} />
        <Route path='portfolio' element={ <Portfolio />} />
        <Route path='resume' element={ <Resume />} />
        <Route path='contactme' element={ <Contact />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}



export default App;
