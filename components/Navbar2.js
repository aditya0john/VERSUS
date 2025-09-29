import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

async function logout() {
  await signOut();
  localStorage.removeItem("authToken");
  location.reload(true);
  window.location.href = "/";
}

function Navbar2() {
  let { data: session } = useSession();
  console.log(
    "SESSION USER -",
    session?.user?.name,
    "\nSESSION EXPIRES -",
    session?.expires
  );
  return (
    <nav className="h-16 text-black p-3 flex gap-2 justify-between border-bottom">
      <div className="flex gap-3 items-center">
        <Link
          href="/"
          className="flex items-center text-decoration-none text-black font-bold mr-4"
        >
          <Image
            src="/images/logo.png"
            alt="image"
            width={40}
            height={10}
            className="mr-1"
          />
          <h>VERSUS</h>
        </Link>
        <div className="hidden sm:flex md:flex gap-3 items-center">
          <Link href="/" className="flex gap-1 text-decoration-none text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor "
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            HOME
          </Link>

          <Link
            href="/Courses"
            className="flex gap-1 text-decoration-none text-black"
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
            LEARN
          </Link>

          <Link
            href="/Coding"
            className="flex gap-1 text-decoration-none text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="black"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
            CODE
          </Link>
        </div>
      </div>

      <div className="flex gap-2 items-center">
        <div class="dropdown flex items-center">
          <Image
            alt="image"
            width={100}
            height={100}
            src={session?.user?.image}
            className="rounded w-10 h-10 border"
          />
          <button
            class="flex p-2 dropdown-toggle text-black"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          ></button>

          <ul class="dropdown-menu p-0 transition duration-300 drop-shadow-2xl">
            <div className="flex flex-col justify-center select-none rounded-t-md">
              <Image
                alt="image"
                width={200}
                height={200}
                className="rounded-t-md object-cover"
                src={session?.user?.image}
              />
              <p className="flex justify-center text-xl font-bold capitalize">
                {session?.user?.name}
              </p>
            </div>
            <li>
              <Link
                href="/"
                className="dropdown-item text-decoration-none text-black"
              >
                Profile
              </Link>
            </li>

            <li>
              <Link
                href="/"
                className="dropdown-item text-decoration-none text-black"
              >
                Enrolled Courses
              </Link>
            </li>

            <li>
              <Link
                href="/Help&Support"
                className="dropdown-item text-decoration-none text-black"
              >
                Support
              </Link>
            </li>
          </ul>
        </div>

        <button
          className="font-semibold border border-black text-black hover:bg-red-300 rounded-md p-2 px-3 ml-4 transition duration-200"
          onClick={logout}
        >
          LOGOUT
        </button>
      </div>
    </nav>
  );
}

export default Navbar2;
