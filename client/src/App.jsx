import './App.css'
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
        <Main/>
        <About/>
        <Projects/>
        <Contact/>
      </div>
    </>
  )
}

export default App
