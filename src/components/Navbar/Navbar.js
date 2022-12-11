import React from "react";
// import Toggle from "../Toggle/Toggle";

import "./Navbar.scss";
import { Link } from "react-scroll";
import Mobilemenu from "../MobileMenu/MobileMenu";

const navbar = () => {
  // const [toggle, setToggle] = useState(false);

  return (
    <div className="n-wrapper " id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Coder Rabbi</div>
        {/* <Toggle /> */}
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          {/* <ul>
            {["Home", "Serivces", "Experience", "Work", "contact"].map(
              (item) => (
                <li key={item}>
                  <a href={`#${item}`}>{item}</a>
                </li>
              )
            )}
          </ul> */}

          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Home" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="Services" spy={true} smooth={true}>
                Serivces
              </Link>
            </li>
            <li>
              <Link to="Skills" smooth={true}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="Portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
            </li>
            {/* <li>
              <Link to="Testimonials" spy={true} smooth={true}>
                Testimonial
              </Link>
            </li> */}
            <li>
              <Link to="Blogs" spy={true} smooth={true}>
                Blogs
              </Link>
            </li>
          </ul>
        </div>
        <Link to="Contact" spy={true} smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
      <Mobilemenu className="mobileMenu" />
    </div>
  );
};

export default navbar;
