
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './componantes/Navbar/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Scrollbars from 'react-custom-scrollbars';
function App() {
  return (
    <div className="App">
      <Navbar/>
      
    <Switch>
    <Route exact path="/">
    
    <Home/>
    </Route>
    <Route  path="/contact">
      <Contact/>
    </Route>
    <Route  path="/about">
      <About/>
    </Route>

    </Switch>

    
    </div>
  );
}

export default App;
