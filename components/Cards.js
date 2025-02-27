import { useSession } from "next-auth/react";
import Link from "next/link";

function Cards({ text, button, src, href, color, SVG }) {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className={`box con change_button bg-${color}-100 rounded-3xl `}>
        <Link href={href}>
          <div className="con_upper p-1">
            <svg
              className="flex items-center"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="0.8"
              stroke={color}
            >
              <path stroke-linecap="round" stroke-linejoin="round" d={src} />
              <text
                x="12"
                y="14"
                font-size="5"
                strokeWidth={0.2}
                text-anchor="middle"
              >
                {SVG}
              </text>
            </svg>
          </div>
        </Link>
        <div className="card-body p-0 con_lower">
          <p
            className={`text-center p-3 h-20 uppercase user-select-none font-mono font-semibold tracking-tight`}
          >
            {text}
          </p>
          <div
            className={`py-3 items-center justify-center rounded-b-3xl flex card-body bg-${color}-100 text-black`}
          >
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
