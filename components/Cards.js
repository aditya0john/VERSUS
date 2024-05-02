import { useSession } from "next-auth/react";
import Link from "next/link";

function Cards({ text, button, src, href }) {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="card box con change_button">
        <div className="con_upper p-1">
          <svg
            className="flex items-center"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="0.8"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d={src} />
          </svg>
        </div>
        <div className="card-body p-0 con_lower">
          <div className="card-text text-center p-1 h-20 uppercase">{text}</div>
          <div className=" items-center justify-center rounded-md flex card-body bg-white text-black">
            <Link href={href} className="text-decoration-none text-black">
              {button}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
