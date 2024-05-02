import Link from "next/link";
import React from "react";

function Navbar1() {
  function signUp() {
    window.location.href = "/SignUp";
  }
  return (
    <div className="sticky top-0 z-1 seashell text-black p-3 flex items-center gap-2 justify-between border-bottom">
      <Link
        href="/"
        className="flex items-center text-decoration-none text-black font-bold"
      >
        <img
          src="/images/logo.png"
          alt="image"
          width={40}
          height={10}
          className="mr-1"
        />
        <h>VERSUS</h>
      </Link>

      <div className="flex gap-20 items-center">
        <div class="dropdown nav_text">
          <button
            class=" dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            PRODUCTS
          </button>
          <ul class="bg-black dropdown-menu p-0 mt-4 nav_text w-screen">
            <li className="mt-10 mb-10 ">
              <Link
                href="/"
                className="dropdown-item text-decoration-none bg-black"
              >
                <p className="nav_text hdg flex items-center justify-center text-gray-400 hover:text-white">
                  Product 1
                </p>
              </Link>
              <Link
                href="/"
                className="dropdown-item text-decoration-none bg-black"
              >
                <p className="nav_text hdg flex items-center justify-center text-gray-400 hover:text-white">
                  Product 2
                </p>
              </Link>
              <Link
                href="/"
                className="dropdown-item text-decoration-none bg-black"
              >
                <p className="nav_text hdg flex items-center justify-center text-gray-400 hover:text-white">
                  Product 3
                </p>
              </Link>
            </li>
          </ul>
        </div>

        <div class="dropdown nav_text">
          <button
            class="dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            HELP & SUPPORT
          </button>
          <ul class="bg-black dropdown-menu p-0 mt-4 nav_text w-screen">
            <li className="mt-10 mb-10">
              <Link
                href="/Help&Support"
                className="dropdown-item text-decoration-none bg-black"
              >
                <p className="nav_text hdg flex items-center justify-center text-gray-400 hover:text-white">
                  Call customer care
                </p>
              </Link>
              <Link
                href="/Help&Support"
                className="dropdown-item text-decoration-none bg-black"
              >
                <p className="nav_text hdg flex items-center justify-center text-gray-400 hover:text-white">
                  File a Report
                </p>
              </Link>
              <Link
                href="/Help&Support"
                className="dropdown-item text-decoration-none bg-black"
              >
                <p className="nav_text hdg flex items-center justify-center text-gray-400 hover:text-white">
                  E-mail us
                </p>
              </Link>{" "}
              <Link
                href="/Help&Support"
                className="dropdown-item text-decoration-none bg-black"
              >
                <p className="nav_text hdg flex items-center justify-center text-gray-400 hover:text-white">
                  Ask us anything
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="flex gap-2">
          <button
            className="border border-black rounded-md px-3 p-2 hover:bg-yellow-300"
            onClick={signUp}
          >
            Sign In
          </button>
        </div>
        <div className="flex gap-2">
          <button
            className="border border-black rounded-md px-3 p-2 hover:bg-green-500"
            onClick={() => (window.location.href = "/LogIn")}
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar1;
