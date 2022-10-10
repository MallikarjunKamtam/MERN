import React from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-metal flex items-center justify-between p-5 font-bold">
      <div className="text-lg font-bold">
        <Link to="/">Goal Setter</Link>
      </div>
      <div>
        <ul className="flex gap-5">
          <li>
            <Link to="/login">
              <label className="flex flex-col items-center justify-center cursor-pointer">
                <FaSignInAlt />
                <label className="cursor-pointer"> Sign In</label>
              </label>
            </Link>
          </li>
          <li>
            <Link to="/register">
              <label className="flex flex-col items-center justify-center cursor-pointer">
                <FaUser />
                <label className="cursor-pointer">Register</label>
              </label>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
