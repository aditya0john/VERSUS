import Navbar2 from "./Navbar2";

export default function Layout4({ children }) {
  return (
    <>
      <div className="bg-white">
        <Navbar2 />
        <div className="bg-white p-1">{children}</div>
      </div>
    </>
  );
}
