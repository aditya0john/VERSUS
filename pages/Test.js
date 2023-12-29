import Layout3 from "@/components/Layout3";
import Loading from "@/components/Loading";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Test() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/6544805e12a5d376599430a6")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  } else if (!data) {
    return <p>No profile data</p>;
  }

  return (
    <main>
      <Layout3>
        <div className="grid h-full">
          <div className="bg-white rounded-l-lg p-3">
            {data.record.map((x) => {
              console.log("X", x);
              return (
                <>
                  <div key={x.id} className="box rounded-lg">
                    <div className="mt-6 bg-purple-200 rounded-lg grido">
                      <div className="flex-col pt-2">
                        <div className="shdg font-bold pl-4">TEST {x.id}</div>
                        <hr />
                        <p className="text-uppercase pl-4">{x.title}</p>
                      </div>

                      <div className="bg-purple-300 rounded-r-lg text-decoration-none text-black">
                        <div className="grid p-3">
                          <Link
                            href={x.href}
                            className="text-decoration-none text-black"
                          >
                            <div className="p-2 rounded-lg bg-yellow-100 box grid grid-cols-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                                />
                              </svg>
                              <p className="shdg flex items-center ">Test</p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </Layout3>
    </main>
  );
}
