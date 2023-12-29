import { signIn } from "next-auth/react";
import Link from "next/link";
import React from "react";

function Navbar1() {
  return (
    <div className="bg-white text-black p-3 flex items-center gap-2 justify-between">
      <Link href="/">
        <img
          src="/images/logo.png"
          alt="image"
          width={30}
          height={10}
          className="mr-4"
        />
      </Link>

      <div className="flex gap-20 items-center">
        <div class="dropdown nav_text">
          <button
            class="btn dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Products
          </button>
          <ul class="dropdown-menu nav_text p-0">
            <li>
              <Link
                href="/"
                className="dropdown-item text-decoration-none text-black"
              >
                <p className="nav_text">hey</p>
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="dropdown-item text-decoration-none text-black"
              >
                <p className="nav_text">hey</p>
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="dropdown-item text-decoration-none text-black"
              >
                <p className="nav_text">hey</p>
              </Link>
            </li>
          </ul>
        </div>

        <div class="dropdown nav_text items-center">
          <button
            class="btn dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Help and Support
          </button>
          <ul class="dropdown-menu p-0">
            <li>
              <Link
                href="/"
                className=" dropdown-item text-decoration-none text-black"
              >
                <p className="nav_text">Call customer care</p>
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className=" dropdown-item text-decoration-none text-black"
              >
                <p className="nav_text">File a Report</p>
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className=" dropdown-item text-decoration-none text-black"
              >
                <p className="nav_text">E-mail us</p>
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className=" dropdown-item text-decoration-none text-black"
              >
                <p className="nav_text">Ask us anything</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex gap-2">
        <button
          className="bg-green-500 rounded-md px-3 p-1 hover:bg-green-400"
          onClick={() => signIn("google")}
        >
          Log In
        </button>
      </div>
    </div>
  );
}

export default Navbar1;
