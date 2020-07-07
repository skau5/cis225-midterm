import React,{Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/CustomNavbar';
import Footer from './Components/Footer';

class App extends Component { 
  render() {
  return (
    <Router>
      
      <div>
        <Navbar />   
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        
      </div>
      <div>
        <Footer />
      </div>
    </Router>
    
  );
}
}

export default App;
