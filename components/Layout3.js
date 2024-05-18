import Link from "next/link";
import Navbar2 from "./Navbar2";
import Itemstrip from "./Itemstrip";
import { useSession } from "next-auth/react";

export default function Layout3({ children }) {
  let { data: session } = useSession();
  if (session) {
    return (
      <>
        <div>
          <Navbar2 />
          <div className="bg-black p-1 text-black rounded-top">
            <Itemstrip />
            <div className="grid gridd h-100">
              <aside className="seashell rounded-lg p-3 ml-2 md:ml-1 mt-1 mr-2 mb-1 h-80">
                <div className="seashell p-3 rounded-lg flex items-center justify-center">
                  <form>
                    <label className="text-uppercase">date :</label>
                    <input
                      type="date"
                      className="border border-black rounded-lg p-2 ml-2 box"
                    />
                  </form>
                </div>

                <hr />

                <p className="flex justify-center">ENROLLED COURSES</p>

                <hr />

                <div className="pl-3 pr-3">
                  <Link href="/" className="text-decoration-none text-black">
                    <div className="bg-white change border border-black bradius p-2 flex gap-2 items-center shdg">
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-8 h-8"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </button>
                      C++ for Begginers
                    </div>
                  </Link>
                </div>
              </aside>

              <div className="h-screen p-3 seashell ml-2 md:ml-1 mt-1 mr-2 mb-1 rounded-md scrollbar">
                {children}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
