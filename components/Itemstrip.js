import { useRouter } from "next/router";
import React from "react";

function Itemstrip() {
  let route = useRouter();

  if (route.asPath == "/Courses") {
    return (
      <div className="flex" style={{ position: "relative" }}>
        <div
          className="bg-repeat bg-center"
          style={{
            position: "absolute",
            backgroundImage: "url('/images/Un2.png')",
            width: "100%",
            height: "100%",
            opacity: 0.5,
            zIndex: -1,
          }}
        />
        <div className="w-full h-40 flex justify-center items-center">
          <h1 className="p-4 boxx hdg text-black bg-white text-uppercase bradius border border-4 border-black">
            courses
          </h1>
        </div>
      </div>
    );
  } else if (route.asPath == "/Test") {
    return (
      <div className="flex" style={{ position: "relative" }}>
        <div
          className="bg-repeat bg-center"
          style={{
            position: "absolute",
            backgroundImage: "url('/images/Un2.png')",
            width: "100%",
            height: "100%",
            opacity: 0.5,
            zIndex: -1,
          }}
        />
        <div className="w-full h-40 flex justify-center items-center">
          <h1 className="p-4 boxx hdg text-black bg-white text-uppercase bradius border border-4 border-black">
            Test
          </h1>
        </div>
      </div>
    );
  } else if (route.asPath == "/ProgLabs") {
    return (
      <div className="flex" style={{ position: "relative" }}>
        <div
          className="bg-repeat bg-center"
          style={{
            position: "absolute",
            backgroundImage: "url('/images/Un2.png')",
            width: "100%",
            height: "100%",
            opacity: 0.5,
            zIndex: -1,
          }}
        />
        <div className="w-full h-40 flex justify-center items-center">
          <h1 className="p-4 boxx hdg text-black bg-white text-uppercase bradius border border-4 border-black">
            ProgLabs
          </h1>
        </div>
      </div>
    );
  } else if (route.asPath == "/Tools") {
    return (
      <div className="flex" style={{ position: "relative" }}>
        <div
          className="bg-repeat bg-center"
          style={{
            position: "absolute",
            backgroundImage: "url('/images/Un2.png')",
            width: "100%",
            height: "100%",
            opacity: 0.5,
            zIndex: -1,
          }}
        />
        <div className="w-full h-40 flex justify-center items-center">
          <h1 className="p-4 boxx hdg text-black bg-white text-uppercase bradius border border-4 border-black">
            Tools
          </h1>
        </div>
      </div>
    );
  } else if (route.asPath == "/Help&Support") {
    return (
      <div className="flex" style={{ position: "relative" }}>
        <div
          className="bg-repeat bg-center"
          style={{
            position: "absolute",
            backgroundImage: "url('/images/Un2.png')",
            width: "100%",
            height: "100%",
            opacity: 0.5,
          }}
        />
        <div className="w-full h-40 flex justify-center items-center">
          <h1
            style={{ zIndex: 1 }}
            className="p-4 boxx hdg text-black bg-white text-uppercase bradius border border-4 border-black"
          >
            Help and Support
          </h1>
        </div>
      </div>
    );
  }
}

export default Itemstrip;
