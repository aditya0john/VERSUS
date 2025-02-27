import Navbar1 from "@/components/Navbar1";
import Link from "next/link";
import { useState } from "react";

export default function Layout({ children }) {
  const [isDropDownActive, setDropDownActive] = useState(false);

  return (
    <>
      <div className="bg-slate-50">
        <Navbar1 />
        <div className="bg-slate-50 p-1 text-white h-full rounded-top mx-auto max-w-2xl lg:max-w-7xl">
          {children}
        </div>

        
        <footer className="bg-slate-100 min-h-[14vh] flex items-center justify-evenly p-3 text-xs lg:text-2xl">
          <Link href="/" className="text-decoration-none text-black/[0.6]">
            @Copyright &quot;Versus-Code.com&quot;
          </Link>
          <Link
            href="/Help&Support"
            className="text-decoration-none text-black/[0.6]"
          >
            Help & Support
          </Link>
          <Link href="/" className="text-decoration-none text-black/[0.6]">
            About
          </Link>
        </footer>
      </div>
    </>
  );
}
