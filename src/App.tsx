import React, { useState, FormEvent } from "react";
import "./App.css";
import Axios from "axios";
//ADAM
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import About from "./components/about/About";
import Booking from "./components/booking/Booking";
// import Guests from "./components/guests/Guests";
import Nomatch from "./components/nomatch/Nomatch";
// import Products from "./components/products/Products";
// import Users from "./components/users/Users";
import Home from "./components/home/Home";
//ADAM

function App() {

  const [datafromDatabase, setdatafromDatabase] = useState("")

  Axios({
    method: "GET",
    url: "http://localhost:5000", //Vad styr denna? pekar på server porten)
    headers: {
      "Content-Type": "application/json"     
    }
   
  }).then(res => {
    console.log(res.data);  

    //Database(res.data)
  });
  
  function Database(thenewValue: string) {
    setdatafromDatabase(thenewValue);
  }
  //event hantering
  //updatera state
  //axios.post 

  return (
    <div className="App">
      {/* HELENA */}
      <h1>{ datafromDatabase }</h1>
      {/* HELENA */}
      
      {/* <Booking></Booking> */}
      {/* <Booking addBooking={this.addBooking}></Booking> */}
      {/* <Guests
        deleteBooking={this.deleteBooking}
        guests={this.state.guests}
      ></Guests> */}
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">| Home_</Link>
              </li>
              <li>
                <Link to="/about">| About_</Link>
              </li>
              <li>
                <Link to="/booking">| Booking_</Link>
              </li>
              <li>
                <Link to="/nomatch">| Nomatch_</Link>
              </li>
              <li>
                <Link to="/products">| Products_</Link>
              </li>
              <li>
                <Link to="/users">| Users_</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            {/* <Route path="/about">
              <About /> */}
            {/* </Route> */}
            <Route path="/booking">
              <Booking />
            </Route>
            {/* <Route path="/products">
              <Products />
            </Route>
            <Route path="/users">
              <Users /> */}
            {/* </Route> */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <Nomatch />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
    /* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */
    // <div>
    //   <Router>
    //     <div>
 
    //     </div>
    //   </Router>
    //   </div>
  );
}

export default App;
