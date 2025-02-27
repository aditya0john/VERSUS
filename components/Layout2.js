import Navbar2 from "./Navbar2";

export default function Layout2({ children }) {
  return (
    <>
      <div className="seashell">
        <Navbar2 />
        <div className="seashell mx-auto">{children}</div>
      </div>
    </>
  );
}
