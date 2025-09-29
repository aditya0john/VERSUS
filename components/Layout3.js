import Link from "next/link";
import Itemstrip from "./Itemstrip";
import { useSession } from "next-auth/react";
import Layout2 from "./Layout2";

export default function Layout3({ children }) {
  let { data: session } = useSession();
  if (session) {
    return (
      <>
        <Layout2>
          <Itemstrip />

          <div className="flex lg:flex-row flex-col items-center justify-center relative p-2">
            <aside className="bg-[#190d05]/[0.4] rounded-lg p-3 h-80 lg:w-[26vw] mx-4 hidden lg:block">
              <div className="flex items-center justify-center ">
                <p className="text-lg font-bold flex justify-center">
                  ENROLLED COURSES
                </p>

                <div className="rounded-lg flex items-center justify-center absolute top-8 border border-black">
                  <form>
                    <input
                      type="date"
                      className="shadow-lg shadow-black rounded-lg p-2 box"
                    />
                  </form>
                </div>
              </div>

              <Link href="/" className="text-decoration-none text-black">
                <div className="bg-[#fcf5e5] change_button drop-shadow-lg border-2 rounded-full flex items-center gap-2 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6 opacity-60"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <span className="text-xl italic">C++ for Beginners</span>
                </div>
              </Link>
            </aside>

            <div className="h-full w-full p-3 scrollbar border-l-2 border-black/[0.2]">
              {children}
            </div>
          </div>
        </Layout2>
      </>
    );
  }
}
