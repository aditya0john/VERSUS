import Link from "next/link";
import Navbar2 from "./Navbar2";

export default function Layout2({ children }) {
  return (
    <>
      <div className="bg-black">
        <Navbar2 />
        <div className="bg-black p-1 text-black h-full rounded-top">
          {children}
        </div>
      </div>
      <footer className="bg-white flex justify-evenly p-3">
        <Link href="/" className="text-decoration-none text-black">
          @Copyright "Versus.com"
        </Link>
        <Link href="/Help&Support" className="text-decoration-none text-black">
          Help & Support
        </Link>
        <Link href="/" className="text-decoration-none text-black">
          About
        </Link>
      </footer>
    </>
  );
}
