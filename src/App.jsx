import { useState } from 'react';
import './App.css'
import {LoadingScreen} from "./compontents/LoadingScreen";
import {Navbar} from "./compontents/Navbar";
import {MobileMenu} from "./compontents/MobileMenu";
import {Home} from "./compontents/sections/Home";
import {About} from "./compontents/sections/About";
import {Projects} from "./compontents/sections/Projects";
import "./index.css"

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <>
    {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "} 
      
    <div className={`min-h-screen transition-opacity duration-700 ${
      isLoaded ? "opacity-100" : "opacity-0"} 
      bg-black text-gray-100`}
    >
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

      <Home />

      <About />

      <Projects />



    </div>
    
    
    </>
  )
}

export default App
