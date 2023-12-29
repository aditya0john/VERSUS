import Navbar1 from "@/components/Navbar1";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Layout({ children }) {
  let { data: session } = useSession();
  if (!session) {
    return (
      <>
        <div className="bg-white">
          <Navbar1 />
          <div className="bg-gray-400 p-1 text-white h-full rounded-top">
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
