import React from "react";
import Navbar from "./pages/components/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import History from "./pages/history/History";
import Contact from "./pages/contact/Contact";
import Footer from './pages/components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route path="/history" component={History} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>

      <Footer/>

    </div>
  );
}

export default App;
