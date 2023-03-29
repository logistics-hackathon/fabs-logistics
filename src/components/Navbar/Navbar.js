import logo from "../../images/logo.png";
import "./Navbar.css"
import React, { useState, useEffect } from "react";
import { Link, link } from "react-router-dom";
function Navbar({ loggedIn }) {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (toggle === true) {
      document.getElementById("mySidenav").style.width = "250px";
    } else {
      document.getElementById("mySidenav").style.width = "0px";
    }
  }, [toggle]);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  let data;
  if (loggedIn) {
    data = (
      <>
        <p>Welcome</p>
        <Link to="/dashboard">
          <li>Dashboard</li>
        </Link>
      </>
    );
  } else {
    data = (
      <>
        {
          <div className="dropdown">
            <button>Help</button>
            <div className="dropdown-content">
              <Link to="/login">
                <li>whapsApp</li>
              </Link>

              <Link to="/customer/register">
                <li>08056439280 </li>
              </Link>
              <Link to="/restaurant/register">
                <li>fabslogistics@gmail.com</li>
              </Link>
            </div>
          </div>
        }
      </>
    );
  }
  return (
    <div>
      <div className="parent nav-parent">
        <nav>
          {/* <div className="nav-parent"> */}
          <div className="logo-wrap"
          >
            <Link to="/">
            <><h3>FABS Logistics</h3></>
              <img src={logo} alt="" />{" "}
            </Link>
            
          </div>

          <div>
            <ul className="menubar">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Login</a>
              </li>
              <li>
                <a href="">Sign up</a>
              </li>
              {/* <li>
                <a href="">Help</a>
              </li> */}
              {data}
            </ul>

            <i onClick={handleToggle} class="fa-solid fa-bars menubaricon"></i>
          </div>

          {/* </div> */}
        </nav>
      </div>

      <div id="mySidenav" class="sidenav">
        <a
          onClick={handleToggle}
          href="javascript:void(0)"
          class="closebtn"
          onclick="closeNav()"
        >
          &times;
        </a>
        <a href="">About Us</a>
        <a href="">Contact Us</a>
        <a href="">Start your order </a>
      </div>
    </div>
  );
}
export default Navbar;
