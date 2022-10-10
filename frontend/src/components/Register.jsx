import React from "react";
import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";

function Register() {
  const [formValues, setFormValues] = useState({
    userName: "",
    email: "",
    password: "",
    password2: "",
    city: "",
  });

  const onChange = (e) => {
    e.preventDefault();
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div className="flex flex-col">
        <label className="text-xl font-extrabold">Sign Up</label>
        <label>Please create a new acoount</label>
      </div>
      <div>
        <form className="flex flex-col justify-center items-center gap-4 mt-5">
          <input
            className="border-[1px] rounded w-1/4 h-[40px] p-2 text-sm"
            type="text"
            name="userName"
            placeholder="User Name"
            onChange={onChange}
          />{" "}
          <input
            className="border-[1px] rounded w-1/4 h-[40px] p-2 text-sm"
            type="email"
            name="email"
            placeholder="Email"
            onChange={onChange}
          />{" "}
          <input
            className="border-[1px] rounded w-1/4 h-[40px] p-2 text-sm"
            type="text"
            name="city"
            placeholder="City"
            onChange={onChange}
          />
          <input
            className="border-[1px] rounded w-1/4 h-[40px] p-2 text-sm"
            type="password"
            name="password"
            placeholder="password"
            onChange={onChange}
          />{" "}
          <input
            className="border-[1px] rounded w-1/4 h-[40px] p-2 text-sm"
            type="password"
            placeholder="confirm password"
            name="password2"
            onChange={onChange}
          />{" "}
          <button
            className="w-2/7 bg-midnight text-white p-3 rounded"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
