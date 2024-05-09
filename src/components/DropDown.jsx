import React, { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const DropDown = () => {
  const [dropdown, setDropDown] = useState(false);

  return (
    <div>
      <div className="d-flex align-items-center justify-content-center gap-2 border-black">
        <button
          onClick={() => {
            setDropDown(!dropdown);
          }}
          className="rounded-2 border-1 mt-5 "
        >
          <IoIosArrowDown className="m-2 " />
        </button>
      </div>
      <div className=" d-md-flex justify-content-end py-3 position-relative ">
        {dropdown && (
          <ul className="d-flex flex-column gap-2 align-items-center rounded-2 position-absolute bg-elements ">
            <div className="position-absolute btn2 p-2">
              <button
                className=" m-0 rounded-1 border-1 px-2"
                onClick={() => {
                  setDropDown(false);
                }}
              >
                X
              </button>
            </div>
            <li className="w-100 px-2 py-1 rounded-2 text-center">
              <Link className="text-black text-decoration-none" to="/">
                Home
              </Link>
            </li>
            <li className="w-100 px-2 py-1 rounded-2 text-center">
              <Link className="text-black text-decoration-none" to="/about">
                About
              </Link>
            </li>
            <li className="w-100 px-2 py-1 rounded-2 text-center">
              <Link
                className="text-black text-decoration-none"
                to="/methodology"
              >
                Our Method
              </Link>
            </li>
            <li className="w-100 px-2 py-1 rounded-2 text-center">
              <Link className="text-black text-decoration-none" to="/contact">
                Contact
              </Link>
            </li>
            <li className="w-100 px-2 py-1 rounded-2 text-center">
              <Link className="text-black text-decoration-none" to="/teams">
                Team
              </Link>
            </li>
            <li className="w-100 px-2 py-1 rounded-2 text-center">
              <Link className="text-black text-decoration-none" to="/portfolio">
                Stories
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropDown;
