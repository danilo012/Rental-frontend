// Imported Required Files
import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { rentContext } from "../App";
import {Link,useNavigate} from 'react-router-dom'

function Header() {

  // Declare Context inside the context variable 
  let context = useContext(rentContext);
  
  // Usenavigate to navigate another page
  let navigate = useNavigate()

  // get token from sessionStorage 
  let token = sessionStorage.getItem('token');

  // Write Logout Function
  let logout = ()=>{
    sessionStorage.clear();
    navigate("/login")
  }

  
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand ><Link to="/dashboard" className="text-decoration-none text-light">Rental</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav><Link to="/dashboard" className="bg-dark ml-2 mr-2 mt-2 text-decoration-none" style={{color:"grey"}}>Home</Link></Nav>
            <Nav><Link to="/help" className="bg-dark ml-2 mr-2 mt-2 text-decoration-none" style={{color:"grey"}}>Help</Link></Nav>
            <Nav>
              <Link to="/cart" className="bg-dark ml-2 mr-2 mt-2 text-decoration-none" style={{color:"grey"}}>
              <ShoppingCartIcon />
              {/* Declare CartValue */}
              <span className="count">{context.cartValue}</span>
              </Link>
            </Nav>
            <Nav>  
            {/* If token is present than inside the header logout button is showing and it's not present than button is not showing inside the header */}
            {token?<button  className="btn btn-secondary  pl-4 pr-4 text-light" onClick={()=>{logout()}}>Logout</button>:<></>}
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
