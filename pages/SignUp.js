import Navbar1 from "@/components/Navbar1";
import React, { useState } from "react";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function LogIn() {
    window.location.href = "/LogIn";
  }
  const handleSignup = async () => {
    try {
      const response = await axios.post("http://localhost:3001/signup", {
        email,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Navbar1 />
      <div className="flex justify-center items-center hdg text-black mt-5">
        <img src="/images/logo.png" alt="image" className="w-20 h-20" />
        <p className="phdg pl-2">VERSUS</p>
      </div>
      <div className="body flex flex-col mt-4 rounded-lg flex justify-center items-center">
        <form className="flex flex-col justify-center w-full items-center p-4 body">
          <label className="shdg uppercase font-bold">
            <i>e-mail</i>
            <hr />
          </label>
          <input
            type="email"
            placeholder="enter your email"
            className="bg-white text-black rounded-md border border-black p-2 w-full change hover:placeholder-white"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="shdg uppercase mt-4 font-bold">
            <i>Password</i>
            <hr />
          </label>
          <input
            type="email"
            placeholder="enter your password"
            className="bg-white text-black rounded-md border border-black p-2 w-full change hover:placeholder-white"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex mt-20">
            <button
              onClick={handleSignup}
              className="border border-black rounded-md px-3 p-2 hover:bg-yellow-300"
              type="submit"
            >
              CREATE ACCOUNT
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
