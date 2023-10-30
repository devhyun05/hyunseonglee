import './App.css'
import { Element } from 'react-scroll'; 
import NavigationBar from './components/NavigationBar';
import Main from './pages/Main';
import About from './pages/About'; 
import Projects from './pages/Projects'; 
import Contact from './pages/Contact';
function App() {


  return (
    <>
      <div className="App">
        <NavigationBar/>
        <Element name="home">
          <Main/>
        </Element>
        <Element name="about">
          <About/>
        </Element>
        <Element name="projects">
          <Projects/>
        </Element>
        <Element name="contact">
          <Contact/>
        </Element>
      </div>
    </>
  )
}

export default App
