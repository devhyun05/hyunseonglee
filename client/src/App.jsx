import './App.css'
import NavigationBar from './components/NavigationBar';
import Main from './pages/Main';
import About from './pages/About'; 
import Projects from './pages/Projects'; 

function App() {


  return (
    <>
      <div className="App">
        <NavigationBar/>
        <Main/>
        <About/>
        <Projects/>
      </div>
    </>
  )
}

export default App
