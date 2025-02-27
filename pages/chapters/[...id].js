import Layout2 from "@/components/Layout2";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Loading from "@/components/Loading";
import axios from "axios";

import { useRouter } from "next/router";
import Image from "next/image";

export default function LearnCPP() {
  const [isLoading, setLoading] = useState(true);
  let [Course, setCourse] = useState([]);
  let [testId, setTestId] = useState("");
  let router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    axios.get("/api/courses").then((response) => {
      setCourse(response.data);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  } else if (!Course) {
    return <p>No profile data</p>;
  }

  return (
    <>
      <Layout2>
        <div>
          <div className="seashell rounded-lg p-3 overflow-hidden">
            <div className="flex justify-around">
              {Course.filter((x) => x._id == id).map((product, i) => (
                <div key={i}>
                  <p className="text-uppercase font-bold select-none">
                    <div className="p-3 text-4xl">
                      <span className="flex justify-center font-extrabold bg-slate-200 lg:hover:bg-green-400 transform duration-200 rounded-xl p-2 my-2 w-[50vw]">
                        <Image
                          alt="image"
                          className="hidden lg:flex z-10 p-1 h-20 w-20 rotate-[130deg] lg:rotate-[180deg] absolute -bottom-10 left-50 lg:-top-20 lg:-left-40 top-10 lg:h-[200px] lg:w-[200px]"
                          src="/images/arrow.png"
                          height={300}
                          width={300}
                        />
                        {product.title} for {product.description}
                        <Image
                          alt="image"
                          className="hidden lg:flex z-10 p-1 rotate-[30deg] lg:-rotate-[10deg] absolute -bottom-10 right-20 lg:-bottom-20 lg:-right-40 h-20 w-20 lg:h-[200px] lg:w-[200px]"
                          src="/images/arrow.png"
                          height={300}
                          width={300}
                        />
                      </span>
                    </div>
                  </p>
                </div>
              ))}

              <div className="grid grid-cols-2 gap-2">
                <Link href="/Score" className="text-decoration-none text-black">
                  <div className="bg-white p-3 rounded-lg border border-black change_button box image-change">
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

                <Link
                  href={"/test/" + id}
                  className="text-decoration-none text-black"
                >
                  <div className="bg-white p-3 rounded-lg border border-black box change_button box image-change">
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
            <hr className="mb-10" />

            <div>
              {Course.filter((product) => product._id == id).map(
                (product, i) => (
                  <div className="grid grid-cols-2 gap-3" key={i}>
                    {product.chapters.map((chapter, j) => (
                      <>
                        <Link
                          className="text-decoration-none baseBackgroundColor p-3 rounded-lg change"
                          key={j}
                          href={`/learning/chapterId=${chapter?._id}&courseId=${id}`}
                        >
                          <div className="baseTextColor">
                            <p className="font-bold text-xs lg:text-base">chapter: {j + 1}</p>
                            <p className="text-base lg:text-3xl font-bold uppercase tracking-tight">
                              {chapter?.chapterName}
                            </p>
                            <div className="hidden md:block">
                              <hr />
                              <p className="text-uppercase pl-4 font-semibold">
                                {chapter?.chapterDescription}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </>
                    ))}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </Layout2>
    </>
  );
}
