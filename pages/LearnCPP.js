import Layout2 from "@/components/Layout2";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Loading from "@/components/Loading";

export default function LearnCPP() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/654334bb0574da7622c0e55e")
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
    <>
      <Layout2>
        <div className="grid h-full scrollbar">
          <div className="bg-white rounded-l-lg p-3">
            <div className="flex justify-between">
              <p className="text-uppercase hdg">chapters</p>
              <div className="grid grid-cols-2 gap-2">
                <Link href="/Score" className="text-decoration-none text-black">
                  <div className="p-3 rounded-lg bg-purple-200 box">
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
                        d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"
                      />
                    </svg>
                    <p className="flex justify-center">Check Score</p>
                  </div>
                </Link>
                <Link href="/Test" className="text-decoration-none text-black">
                  <div className="p-3 rounded-lg bg-purple-200 box">
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
                        d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"
                      />
                    </svg>
                    <p className="flex justify-center">Take Test</p>
                  </div>
                </Link>
              </div>
            </div>

            {data.record.map((x) => {
              console.log("X", x);
              return (
                <>
                  <div key={x.id} className="box rounded-lg">
                    <div className="mt-6 bg-purple-200 rounded-lg grido">
                      <div className="flex-col pt-2">
                        <div className="shdg font-bold pl-4">{x.title}</div>
                        <hr />
                        <p className="text-uppercase pl-4">{x.content}</p>
                      </div>

                      <div className="bg-purple-300 rounded-r-lg text-decoration-none text-black">
                        <div className="grid gap-10 p-3">
                          <Link
                            href={x.learn}
                            className="text-decoration-none text-black"
                          >
                            <div className="p-2 rounded-lg bg-yellow-100 box grid grid-cols-2">
                              <svg
                                className="w-12 h-12"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                                />
                              </svg>
                              <p className="shdg flex items-center ">Learn</p>
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
      </Layout2>
    </>
  );
}
