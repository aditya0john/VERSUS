import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar1() {
  function signUp() {
    window.location.href = "/SignUp";
  }
  return (
    <nav className="glass sticky top-0 z-50 text-black p-3 flex items-center gap-2 justify-between border-bottom">
      <Link
        href="/"
        className="flex items-center justify-center gap-2 text-decoration-none text-black font-bold"
      >
        <Image width={50} height={50} src="/images/logo.png" alt="image" className="object-cover w-[30px] h-[30px] lg:h-[50px] lg:w-[50px]" />
        <p className="text-[18px] lg:text-4xl lg:font-bold flex pt-2">VERSUS-CODE</p>
      </Link>

      <div className="hidden sm:flex gap-20 items-center">
        <div class="dropdown ">
          <button
            class=" dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            PRODUCTS
          </button>
          <ul class="bg-black dropdown-menu p-0 mt-4 ">
            <li className="mt-10 mb-10 ">
              <Link
                href="/"
                className="dropdown-item text-decoration-none bg-black"
              >
                <p className=" hdg flex items-center justify-center text-gray-400 hover:text-white">
                  Product 1
                </p>
              </Link>
              <hr className="text-white" />
              <Link
                href="/"
                className="dropdown-item text-decoration-none bg-black"
              >
                <p className=" hdg flex items-center justify-center text-gray-400 hover:text-white">
                  Product 2
                </p>
              </Link>
              <hr className="text-white" />
              <Link
                href="/"
                className="dropdown-item text-decoration-none bg-black"
              >
                <p className=" hdg flex items-center justify-center text-gray-400 hover:text-white">
                  Product 3
                </p>
              </Link>
            </li>
          </ul>
        </div>

        <Link href="/Help&Support" className="text-decoration-none text-black">
          <button type="button" aria-expanded="false">
            HELP & SUPPORT
          </button>
        </Link>
      </div>
      <div className="flex gap-3">
        <div className="flex gap-2">
          <button
            className="border border-black rounded-md px-3 p-2 hover:bg-yellow-300"
            onClick={signUp}
          >
            Sign Up
          </button>
        </div>
        <div className="flex gap-2">
          <button
            className="border border-black rounded-md px-3 p-2 hover:bg-green-400"
            onClick={() => (window.location.href = "/LogIn")}
          >
            Log In
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar1;
