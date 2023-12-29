import { useRouter } from "next/router";
import React from "react";

function Itemstrip() {
  let route = useRouter();

  if (route.asPath == "/Courses") {
    return (
      <div className="itemstrip_course flex">
        <div className="w-full h-40">
          <h1 className="pl-4 hdg text-black text-uppercase text-decoration-underline">
            courses
          </h1>
        </div>
      </div>
    );
  } else if (route.asPath == "/Test") {
    return (
      <div className="itemstrip_test flex">
        <div className="w-full h-40">
          <h1 className="pl-4 hdg text-black text-uppercase text-decoration-underline">
            tests
          </h1>
        </div>
      </div>
    );
  } else if (route.asPath == "/ProgLabs") {
    return (
      <div className="itemstrip_labs flex">
        <div className="w-full h-40">
          <h1 className="pl-4 hdg text-black text-uppercase text-decoration-underline">
            Program Labs
          </h1>
        </div>
      </div>
    );
  } else if (route.asPath == "/Tools") {
    return (
      <div className="itemstrip_tools flex">
        <div className="w-full h-40">
          <h1 className="pl-4 hdg text-black text-uppercase text-decoration-underline">
            Tools
          </h1>
        </div>
      </div>
    );
  } else if (route.asPath == "/Help&Support") {
    return (
      <div className="itemstrip_hs flex">
        <div className="w-full h-40">
          <h1 className="pl-4 hdg text-black text-uppercase text-decoration-underline">
            help & support
          </h1>
        </div>
      </div>
    );
  }
}

export default Itemstrip;
