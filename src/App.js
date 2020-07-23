import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Wrapper from "./Components/Wrapper";
import Home from "./Pages/Home"
import Portfolio from "./Pages/Portfolio"
import Contact from "./Pages/ContactMe"

function App() {
  return (
   
    <Router>
       <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Wrapper>
        <Footer />
        </div>
    </Router>
    
  );
  
}

export default App;
