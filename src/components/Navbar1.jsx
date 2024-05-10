import React from "react";
import { Dropdown, Image, Navbar } from "react-bootstrap";
import DropDown from "./DropDown";
import logo3 from "../../src/images/logo3.png" 
import logo1 from "../../src/images/logo1.png"
import { Link } from "react-router-dom";

const Navbar1 = () => {
  return (
    <Navbar className="shadow">
      <div className="d-flex flex-row gap-3 align-items-center m-auto my-1 image-container navbar-res ">
        <Link to="/"><Image className="mb-4 top-image" src={logo1} />
        <Image className="mb-4  " src={logo3} /></Link>
        <DropDown />
      </div>
      <hr />
    </Navbar>
  );
};

export default Navbar1;
