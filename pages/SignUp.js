import Navbar1 from "@/components/Navbar1";
import React, { useState } from "react";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = (ev) => {
    ev.preventDefault();
    if (showPassword) {
      setShowPassword(false);
    } else if (!showPassword) {
      setShowPassword(true);
    }
  };

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
        <p className="phdg pl-2">SIGN IN</p>
      </div>
      <div className="body flex flex-col mt-4 rounded-lg flex justify-center items-center">
        <form className="flex flex-col justify-center w-full items-center p-4 body">
          <label className="shdg uppercase font-bold">
            e-mail
            <hr />
          </label>
          <input
            type="email"
            placeholder="enter your email"
            className="bg-white text-black rounded-md border border-black p-2 w-full change hover:placeholder-white"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="shdg uppercase mt-4 font-bold">
            Password
            <hr />
          </label>
          <div className="flex w-full gap-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="create a password"
              className="bg-white text-black rounded-md border border-black p-2 w-full change hover:placeholder-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="border border-black p-2 rounded-lg change"
              onClick={togglePasswordVisibility}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            </button>
          </div>
          <label className="shdg uppercase mt-4 font-bold">
            Verify Password
            <hr />
          </label>
          <input
            placeholder="enter your password again"
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
