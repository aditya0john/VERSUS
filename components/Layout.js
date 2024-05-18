import Navbar1 from "@/components/Navbar1";
import Link from "next/link";
import { useState } from "react";

export default function Layout({ children }) {
  const [isDropDownActive, setDropDownActive] = useState(false);

  return (
    <>
      <div className="bg-white">
        <Navbar1 />
        <div className="bg-white p-1 text-white h-full rounded-top body">
          {children}
        </div>

        <hr />
        <footer className="bg-white flex justify-evenly p-3">
          <Link href="/" className="text-decoration-none text-black">
            @Copyright &quot;Versus-Code.com&quot;
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
      </div>
    </>
  );
}
