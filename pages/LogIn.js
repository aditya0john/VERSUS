import Loading from "@/components/Loading";
import Navbar1 from "@/components/Navbar1";
import { signIn, useSession } from "next-auth/react";
import React from "react";

function LogIn() {
  let { data: session } = useSession();
  if (session) {
    location.reload(true);
    window.location.href = "/";
    return (
      <>
        <div className="bg-white h-screen w-screen flex justify-center items-center">
          <Loading />
        </div>
      </>
    );
  }
  return (
    <>
      <Navbar1 />
      <div className="flex justify-center items-center hdg text-black uppercase mt-5">
        <img src="/images/logo.png" alt="image" className="w-20 h-20" />
        <p className="phdg pl-2">VERSUS</p>
      </div>
      <div className="grid grid-cols-2 body">
        <div className="border border-black flex flex-col mt-4 rounded-lg flex justify-center items-center">
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
            <button
              className="border border-black rounded-lg p-3 mt-3 hover:bg-green-500"
              type="submit"
            >
              LOG IN
            </button>
          </form>
        </div>
        <div className="flex flex-col items-center justify-center m-4 gap-3">
          <button
            className="w-full uppercase overflow-hidden flex gap-3 border border-black rounded-md p-3 font-bold shdg google_color"
            onClick={() => signIn("google")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 50 50"
            >
              <path d="M 26 2 C 13.308594 2 3 12.308594 3 25 C 3 37.691406 13.308594 48 26 48 C 35.917969 48 41.972656 43.4375 45.125 37.78125 C 48.277344 32.125 48.675781 25.480469 47.71875 20.9375 L 47.53125 20.15625 L 46.75 20.15625 L 26 20.125 L 25 20.125 L 25 30.53125 L 36.4375 30.53125 C 34.710938 34.53125 31.195313 37.28125 26 37.28125 C 19.210938 37.28125 13.71875 31.789063 13.71875 25 C 13.71875 18.210938 19.210938 12.71875 26 12.71875 C 29.050781 12.71875 31.820313 13.847656 33.96875 15.6875 L 34.6875 16.28125 L 41.53125 9.4375 L 42.25 8.6875 L 41.5 8 C 37.414063 4.277344 31.960938 2 26 2 Z M 26 4 C 31.074219 4 35.652344 5.855469 39.28125 8.84375 L 34.46875 13.65625 C 32.089844 11.878906 29.199219 10.71875 26 10.71875 C 18.128906 10.71875 11.71875 17.128906 11.71875 25 C 11.71875 32.871094 18.128906 39.28125 26 39.28125 C 32.550781 39.28125 37.261719 35.265625 38.9375 29.8125 L 39.34375 28.53125 L 27 28.53125 L 27 22.125 L 45.84375 22.15625 C 46.507813 26.191406 46.066406 31.984375 43.375 36.8125 C 40.515625 41.9375 35.320313 46 26 46 C 14.386719 46 5 36.609375 5 25 C 5 13.390625 14.386719 4 26 4 Z"></path>
            </svg>
            Or Sign in with Google
          </button>
        </div>
      </div>
    </>
  );
}

export default LogIn;
