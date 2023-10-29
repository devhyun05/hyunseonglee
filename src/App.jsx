import './App.css'
import NavigationBar from '../src/components/NavigationBar';
import Main from '../src/pages/Main';
import About from '../src/pages/About'; 
function App() {


  return (
    <>
      <div className="App">
        <NavigationBar/>
        <Main/>
        <About/>
      </div>
    </>
  )
}

export default App
