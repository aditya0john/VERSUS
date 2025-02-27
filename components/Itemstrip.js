import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function Itemstrip() {
  let route = useRouter();

  if (route.asPath == "/Courses") {
    return (
      <div className="m-1 seashell rounded flex justify-center items-center overflow-hidden  select-none">
        <div className="uppercase text-black hdg thdg">
          <h1 className="text-4xl lg:text-7xl tracking-tight flex flex-col items-center">
            <div>
              <span className="flex justify-center font-extrabold bg-green-400 lg:bg-slate-200 lg:hover:bg-green-400 transform duration-200 rounded-xl p-2 my-2 w-[70vw] lg:w-full">
                <Image
                  alt="image"
                  className="hidden lg:flex z-10 p-1 h-20 w-20 rotate-[130deg] lg:rotate-[180deg] absolute -bottom-10 left-50   lg:-top-20 lg:-left-40 top-10 lg:h-[200px] lg:w-[200px]"
                  src="/images/arrow.png"
                  height={300}
                  width={300}
                />
                COURSES
                <Image
                  alt="image"
                  className="hidden lg:flex z-10 p-1 rotate-[30deg] lg:-rotate-[10deg] absolute -bottom-10 right-20 lg:-bottom-20 lg:-right-40 h-20 w-20 lg:h-[200px] lg:w-[200px]"
                  src="/images/arrow.png"
                  height={300}
                  width={300}
                />
              </span>
            </div>
          </h1>
        </div>
      </div>
    );
  } else if (route.asPath == "/Test") {
    return (
      <div className="m-1 seashell rounded flex justify-center items-center overflow-hidden  select-none">
        <div className="uppercase text-black hdg thdg">
          <h1 className="text-4xl lg:text-7xl tracking-tight flex flex-col items-center">
            <div>
              <span className="flex justify-center font-extrabold bg-green-400 lg:bg-slate-200 lg:hover:bg-green-400 transform duration-200 rounded-xl p-2 my-2 w-[70vw] lg:w-full">
                <Image
                  alt="image"
                  className="hidden lg:flex z-10 p-1 h-20 w-20 rotate-[130deg] lg:rotate-[180deg] absolute -bottom-10 left-50   lg:-top-20 lg:-left-40 top-10 lg:h-[200px] lg:w-[200px]"
                  src="/images/arrow.png"
                  height={300}
                  width={300}
                />
                TESTS
                <Image
                  alt="image"
                  className="hidden lg:flex z-10 p-1 rotate-[30deg] lg:-rotate-[10deg] absolute -bottom-10 right-20 lg:-bottom-20 lg:-right-40 h-20 w-20 lg:h-[200px] lg:w-[200px]"
                  src="/images/arrow.png"
                  height={300}
                  width={300}
                />
              </span>
            </div>
          </h1>
        </div>
      </div>
    );
  } else if (route.asPath == "/Tools") {
    return (
      <div className="m-1 seashell rounded flex justify-center items-center overflow-hidden  select-none">
        <div className="uppercase text-black hdg thdg">
          <h1 className="text-4xl lg:text-7xl tracking-tight flex flex-col items-center">
            <div>
              <span className="flex justify-center font-extrabold bg-green-400 lg:bg-slate-200 lg:hover:bg-green-400 transform duration-200 rounded-xl p-2 my-2 w-[70vw] lg:w-full">
                <Image
                  alt="image"
                  className="hidden lg:flex z-10 p-1 h-20 w-20 rotate-[130deg] lg:rotate-[180deg] absolute -bottom-10 left-50   lg:-top-20 lg:-left-40 top-10 lg:h-[200px] lg:w-[200px]"
                  src="/images/arrow.png"
                  height={300}
                  width={300}
                />
                TOOLS
                <Image
                  alt="image"
                  className="hidden lg:flex z-10 p-1 rotate-[30deg] lg:-rotate-[10deg] absolute -bottom-10 right-20 lg:-bottom-20 lg:-right-40 h-20 w-20 lg:h-[200px] lg:w-[200px]"
                  src="/images/arrow.png"
                  height={300}
                  width={300}
                />
              </span>
            </div>
          </h1>
        </div>
      </div>
    );
  } else if (route.asPath == "/Help&Support") {
    return (
      <div className="m-1 seashell rounded flex justify-center items-center overflow-hidden  select-none">
        <div className="uppercase text-black hdg thdg">
          <h1 className="text-4xl lg:text-7xl tracking-tight flex flex-col items-center">
            <div>
              <span className="flex justify-center font-extrabold bg-green-400 lg:bg-slate-200 lg:hover:bg-green-400 transform duration-200 rounded-xl p-2 my-2 w-[70vw] lg:w-full">
                <Image
                  alt="image"
                  className="hidden lg:flex z-10 p-1 h-20 w-20 rotate-[130deg] lg:rotate-[180deg] absolute -bottom-10 left-50   lg:-top-20 lg:-left-40 top-10 lg:h-[200px] lg:w-[200px]"
                  src="/images/arrow.png"
                  height={300}
                  width={300}
                />
                HELP & SUPPORT
                <Image
                  alt="image"
                  className="hidden lg:flex z-10 p-1 rotate-[30deg] lg:-rotate-[10deg] absolute -bottom-10 right-20 lg:-bottom-20 lg:-right-40 h-20 w-20 lg:h-[200px] lg:w-[200px]"
                  src="/images/arrow.png"
                  height={300}
                  width={300}
                />
              </span>
            </div>
          </h1>
        </div>
      </div>
    );
  }
}

export default Itemstrip;
