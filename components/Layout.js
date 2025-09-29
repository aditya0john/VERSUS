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

        <footer className="bg-slate-100 min-h-[2rem] flex items-center justify-center p-3 text-xs">
          <div className="text-xs text-black/[0.8]">
            @copyright &quot;
            <Link
              href="https://versus-code.vercel.app/"
              className="text-decoration-none text-black"
            >
              <span className="italic font-bold">versus-code.vercel.app</span>
            </Link>
            &quot; | developer -{" "}
            <Link
              href="https://myportfolio-beta-seven-46.vercel.app/"
              className="text-decoration-none text-black"
            >
              <span className="font-bold uppercase">Aditya John</span>
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}
