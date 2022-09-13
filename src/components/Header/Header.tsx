import React from "react";
import home from "../../assets/home.svg";
import "./_header.scss";
import { FaHome, FaInstagramSquare, FaFacebookMessenger } from "react-icons/fa";
import { CgAdd } from "react-icons/cg";
import { MdOutlineExplore } from "react-icons/md";
import { AiOutlineHeart , AiOutlineSearch} from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
const Header = () => {
  return (
    <section className="container">
      <div className="header-container" >
        <div>
          <FaInstagramSquare className="ig-logo" />
        </div>
        <div className="search">
          <input type="text" placeholder="Search" />
          <AiOutlineSearch className="search-logo"/>
        </div>
        <div className="header-icons">
          <FaHome className="header-icon" />
          <FaFacebookMessenger className="header-icon" />
          <CgAdd className="header-icon" />
          <MdOutlineExplore className="header-icon" />
          <AiOutlineHeart className="header-icon" />
          <BiUserCircle className="header-icon" />
        </div>
      </div>
    </section>
  );
};

export default Header;
