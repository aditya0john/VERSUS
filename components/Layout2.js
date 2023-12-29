import Link from "next/link";
import Navbar2 from "./Navbar2";
import { useSession } from "next-auth/react";

export default function Layout2({ children }) {
  let { data: session } = useSession();
  if (session) {
    return (
      <>
        <div className="bg-black">
          <Navbar2 />
          <div className="bg-gray-500 p-1 text-black h-full rounded-top">
            {children}
          </div>
        </div>
        <footer className="bg-white flex justify-evenly p-3">
          <Link href="/" className="text-decoration-none text-black">
            @Copyright "Versus.com"
          </Link>
          <Link
            href="/Help&Support"
            className="text-decoration-none text-black"
          >
            Help & Support
          </Link>
          <Link href="/" className="text-decoration-none text-black">
            About
          </Link>
        </footer>
      </>
    );
  }
}
