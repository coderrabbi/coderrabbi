import React, { useState } from "react";
import "./MobileMenu.scss";
import { motion } from "framer-motion";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-scroll";
const Mobilemenu = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="cr__mobilemenu">
      <RiMenu3Line onClick={() => setToggle(true)} />

      {toggle && (
        <motion.div
          whileInView={{ x: [100, 0] }}
          transition={{ duration: 0.85, ease: "easeOut" }}
        >
          <RiCloseLine size={27} onClick={() => setToggle(false)} />
          <ul>
            {[
              "Home",
              "Services",
              "Experience",
              "Portfolio",
              "Testimonials",
              "Contact",
            ].map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  spy={true}
                  smooth={true}
                  onClick={() => setToggle(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Mobilemenu;
