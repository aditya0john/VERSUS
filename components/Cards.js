import { useSession } from "next-auth/react";
import Link from "next/link";

function Cards({ text, button, src, href, color, SVG }) {
  const { data: session } = useSession();

  if (session) {
    return (
      <div
        className={`box con change_button bg-${color}-100 rounded-3xl w-[40vw] h-[24vh] lg:h-[40vh] lg:w-[16vw]`}
      >
        <Link href={href}>
          <svg
            className="w-full h-[200px]"
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
        </Link>
        <div className="card-body p-0 con_lower">
          <p
            className={`text-center p-3 uppercase user-select-none text-sm font-mono font-semibold tracking-tight text-white/[0.8]`}
          >
            {text}
          </p>
        </div>
      </div>
    );
  }
}

export default Cards;
