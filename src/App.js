// Imported Required Files
import React, { useState } from "react"; 
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/Components/Header";
import Dashboard from "../src/Components/Dashboard";
import Cart from "../src/Components/Cart";
import Login from "../src/Components/Login";
import Signup from "../src/Components/Signup";
import Placeorder from '../src/Components/PlaceOrder'
import Success from "../src/Components/Suceess";
import CreatePanel from '../src/Components/CreatePanel'
import Rentalweb from "../src/Pages/Rentalweb";
import Evbike from "../src/Pages/EvBike";
import Bicycle from "../src/Pages/Bicycle";
import Tripad from "../src/Pages/Tripad";
import AtmosShogunMonitor from "../src/Pages/AtmosShogunMonitor";

// Create Context 
export const rentContext = React.createContext();

function App() {
  // Create State For Cart
  let [cart, setCart] = useState([]);
  
  // Create State For CartValue
  let [cartValue, setCartValue] = useState([cart.length]);

  // Create State for OrderID
  let[orderId,setOrderID] = useState();

  return (
    <div className="App">
      <BrowserRouter>
        {/* Declare Context To Use All Items Globally*/}
        <rentContext.Provider
          value={{ cart, setCart, cartValue, setCartValue ,orderId,setOrderID}}
        >

          {/* Declare Header Component */}
          <Header />

          <Routes>
            {/* Components Routes*/}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/placeorder" element={<Placeorder/>}/>
            <Route path="/success/:id" element={<Success/>}/>
            <Route path="/CreatePanel" element={<CreatePanel/>}></Route>
            <Route path="/Rentalweb" element={<Rentalweb />} />
            <Route path="/ev-bike" element={<Evbike />} />
            <Route path="/bicycle" element={<Bicycle />} />
            <Route path="/tripad" element={<Tripad />} />
            <Route
              path="/atmos-shougn-monitor"
              element={<AtmosShogunMonitor />}
            />
          </Routes>
        </rentContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
