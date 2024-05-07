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
        <p className="phdg pl-2">LOG IN</p>
      </div>
      <div className="grid grid-cols-2 body">
        <div className="border border-black flex flex-col mt-4 rounded-lg flex justify-center items-center">
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
            <input
              type="email"
              placeholder="enter your password"
              className="bg-white text-black rounded-md border border-black p-2 w-full change hover:placeholder-white"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="border border-black rounded-lg p-3 mt-5 hover:bg-green-500"
              type="submit"
            >
              LOG IN
            </button>
          </form>
        </div>
        <div className="flex flex-col items-center justify-center m-4 gap-3">
          <span className="w-full makeLine">
            <button
              className="w-full  uppercase overflow-hidden flex justify-center gap-3 border border-black rounded-md p-3 font-bold shdg google_color"
              onClick={() => signIn("google")}
            >
              <svg
                class="w-10 h-10 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </span>
          <p className="shdg font-bold">SIGN IN WITH GOOGLE</p>
        </div>
      </div>
    </>
  );
}

export default LogIn;
