
import { Routes,Route } from 'react-router-dom';

import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Project from './Components/project';
import './index.css'
function App() {
  return (
    <div className="App">
      <>
      
      <Routes>
    <Route   path ="/"  element ={<Home/>}/>
    <Route   path ="/about"  element ={<About/>}/>
    <Route   path ="/contact"  element ={<Contact/>}/>
    <Route   path ="/project"  element ={<Project/>}/>

      </Routes>
      </>


    </div>
  );
}

export default App;
