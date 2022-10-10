import React from "react";
import { useState } from "react";

function Login() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
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
      <div>
        <p className="text-xl font-extrabold">Sign In</p>
        <label>Sign in and start setting goals</label>
      </div>
      <div>
        <form className="flex flex-col justify-center items-center gap-4 mt-5">
          <input
            className="border-[1px] rounded w-1/4 h-[40px] p-2 text-sm"
            type="email"
            name="email"
            placeholder="Email"
            onChange={onChange}
          />{" "}
          <input
            className="border-[1px] rounded w-1/4 h-[40px] p-2 text-sm"
            type="password"
            name="password"
            placeholder="password"
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

export default Login;
