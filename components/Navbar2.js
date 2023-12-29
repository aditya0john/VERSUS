import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function logout() {
  signOut();
}

function Navbar2() {
  let { data: session } = useSession();
  return (
    <nav className="bg-black text-white p-3 flex gap-2 justify-between">
      <div className="flex gap-3 items-center">
        <Link href="/">
          <img
            src="/images/logo_inverted.png"
            alt="image"
            width={30}
            height={10}
            className="mr-4"
          />
        </Link>

        <Link href="/" className="flex gap-1 text-decoration-none text-white">
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
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          Home
        </Link>

        <Link
          href="/Courses"
          className="flex gap-1 text-decoration-none text-white"
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
              d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
            />
          </svg>
          Learn
        </Link>

        <Link
          href="/Test"
          className="flex gap-1 text-decoration-none text-white"
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
              d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
            />
          </svg>
          Tests
        </Link>

        <Link
          href="/Score"
          className="flex gap-1 text-decoration-none text-white"
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
              d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
            />
          </svg>
          Reports
        </Link>
      </div>

      <div className="flex gap-2 items-center">
        <div class="dropdown flex items-center">
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
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <button
            class="flex btn dropdown-toggle text-white"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          ></button>

          <ul class="dropdown-menu p-2">
            <div className="bg-gray-300 p-2 mb-3 rounded-lg font-bold justify-center flex">
              {session?.user?.name}
            </div>
            <li>
              <Link
                href="/"
                className=" dropdown-item text-decoration-none text-black"
              >
                hey
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="dropdown-item text-decoration-none text-black"
              >
                hey
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="dropdown-item text-decoration-none text-black"
              >
                hey
              </Link>
            </li>
          </ul>
        </div>

        <Link href="/Help&Support" className=" text-decoration-none text-white">
          Support
        </Link>

        <button
          className=" bg-red-500 rounded-md px-3 p-1 ml-4"
          onClick={logout}
        >
          LogOut
        </button>
      </div>
    </nav>
  );
}

export default Navbar2;
