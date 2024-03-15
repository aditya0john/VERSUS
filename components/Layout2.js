import Link from "next/link";
import Navbar2 from "./Navbar2";

export default function Layout2({ children }) {
  return (
    <>
      <div className="bg-black">
        <Navbar2 />
        <div className="bg-black p-1 ">{children}</div>
      </div>
    </>
  );
}
