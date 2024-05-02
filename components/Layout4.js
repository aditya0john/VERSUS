import Navbar2 from "./Navbar2";

export default function Layout4({ children }) {
  return (
    <>
      <div className="seashell">
        <Navbar2 />
        <div className="seashell p-1">{children}</div>
      </div>
    </>
  );
}
