import React, { useState, FormEvent } from "react";
import "./App.css";
import Axios from "axios";
//ADAM
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import About from "./components/about/About";
import Booking from "./components/booking/Booking";
import Guests from "./components/guests/Guests";
import Nomatch from "./components/nomatch/Nomatch";
import Admin from "./components/admin/Admin";
// import Products from "./components/products/Products";
// import Users from "./components/users/Users";
import Home from "./components/home/Home";
//ADAM

function App() {


  return (
    <div className="App">
      

      {/* <Booking></Booking> */}
      {/* <Booking addBooking={this.addBooking}></Booking> */}
      {/* <Guests
        deleteBooking={this.deleteBooking}
        guests={this.state.guests}
      ></Guests> */}

      {/* <Guests updateParent={update}></Guests> */}

      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">| Home_</Link>
              </li>
              <li>
                <Link to="/admin">| Admin_</Link>
              </li>
              <li>
                <Link to="/booking">| Booking_</Link>
              </li>
              <li>
                <Link to="/nomatch">| Nomatch_</Link>
              </li>
              <li>
                <Link to="/guests">| Guests_</Link>
              </li>
              {/* <li>
                <Link to="/users">| Users_</Link>
              </li> */}
            </ul>
          </nav>
          <Switch>
            <Route path="/admin">
              <Admin /> 
            </Route> 
            <Route path="/booking">
              <Booking />
              {/* <Booking save={this.save}/> */}
            </Route>
            {
              <Route path="/guests">
                <Guests />
              </Route>
              /* <Route path="/users">
              <Users /> */
            }
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
        renders the first one that matches the current URL.  */
    // <div>
    //   <Router>
    //     <div>

    //     </div>
    //   </Router>
    //   </div>
  );
}

export default App;
