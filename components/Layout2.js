import Link from "next/link";
import Navbar2 from "./Navbar2";

export default function Layout2({ children }) {
  return (
    <>
      <div className="seashell">
        <Navbar2 />
        <div className="seashell p-1 body">{children}</div>
      </div>
    </>
  );
}
