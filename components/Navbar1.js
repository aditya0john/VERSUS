import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar1() {
  function signUp() {
    window.location.href = "/SignUp";
  }
  return (
    <nav className="h-[4rem] glass sticky top-0 z-50 text-black p-3 flex items-center gap-2 justify-between border-bottom">
      <Link
        href="/"
        className="flex items-center justify-center gap-2 text-decoration-none text-black font-bold"
      >
        <Image
          width={50}
          height={50}
          src="/images/logo.png"
          alt="image"
          className="object-contain w-[30px] h-[30px] lg:h-[50px] lg:w-[50px]"
        />
        <span className="text-[18px] lg:text-4xl lg:font-bold">
          VERSUS-CODE
        </span>
      </Link>

      <div className="flex gap-2">
        <button
          className="bg-yellow-100 rounded-xl p-2 hover:bg-yellow-300"
          onClick={signUp}
        >
          Sign Up
        </button>

        <button
          className="bg-green-100 rounded-xl p-2 hover:bg-green-400"
          onClick={() => (window.location.href = "/LogIn")}
        >
          Log In
        </button>
      </div>
    </nav>
  );
}

export default Navbar1;
