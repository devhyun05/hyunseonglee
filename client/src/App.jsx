import './App.css'
import NavigationBar from './components/NavigationBar'
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills'; 
import Contact from './pages/Contact'; 

function App() {


  return (
    <>
      <div>
        <NavigationBar/> 
        <Home/>
        <About/>
        <Projects/>
        <Skills/>
        <Contact/> 
      </div>
    </>
  )
}

export default App
