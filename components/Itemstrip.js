import { useRouter } from "next/router";
import React from "react";

function Itemstrip() {
  let route = useRouter();

  if (route.asPath == "/Courses") {
    return (
      <div className="m-1 seashell rounded flex justify-center items-center">
        <h1 className="p-4 hdg text-black text-uppercase rounded-lg user-select-nonef">
          courses
        </h1>
      </div>
    );
  } else if (route.asPath == "/Test") {
    return (
      <div className="m-1 seashell rounded flex justify-center items-center">
        <h1 className="p-4 hdg text-black text-uppercase rounded-lg user-select-none">
          Test
        </h1>
      </div>
    );
  } else if (route.asPath == "/Tools") {
    return (
      <div className="m-1 seashell rounded flex justify-center items-center">
        <h1 className="p-4 hdg text-black text-uppercase rounded-lg user-select-none">
          Tools
        </h1>
      </div>
    );
  } else if (route.asPath == "/Help&Support") {
    return (
      <div className="m-1 bg-white rounded flex justify-center items-center">
        <h1 className="p-4 hdg text-black bg-white text-uppercase rounded-lg user-select-none">
          Help and Support
        </h1>
      </div>
    );
  }
}

export default Itemstrip;
