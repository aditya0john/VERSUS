import Layout2 from "@/components/Layout2";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Loading from "@/components/Loading";

import { useRouter } from "next/router";
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";

export default function LearnCPP() {
  const [isLoading, setLoading] = useState(true);
  let [Course, setCourse] = useState([]);
  let [Chapter, setChapter] = useState([]);
  let [lastRead, setlastRead] = useState("");
  let router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) return;

    async function fetchCourseData() {
      const { data, error } = await supabase
        .from("courses")
        .select("*")
        .eq("id", id);

      if (error) {
        console.error("Error fetching courses data:", error);
      } else {
        console.log("CourseData", data);
        setCourse(data);
      }
    }

    async function fetchChapterData() {
      const { data, error } = await supabase
        .from("chapters")
        .select("*")
        .eq("course_id", id);

      if (error) {
        console.error("Error fetching chapter data:", error);
      } else {
        console.log("ChapterData", data);
        setChapter(data);
        setLoading(false);
      }
    }

    fetchCourseData();
    fetchChapterData();
  }, [id]);

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
        <div className="seashell rounded-lg p-3 overflow-hidden flex flex-col items-center gap-4">
          <div className="flex justify-around items-center w-[100vw] border-b-2 overflow-hidden">
            {Course.map((product, i) => (
              <div key={i}>
                <span className="text-uppercase font-bold select-none">
                  <div className="p-3">
                    <span className="flex justify-center font-extrabold bg-slate-200 lg:hover:bg-green-400 transform duration-200 rounded-xl p-2 my-2 w-[40vw]">
                      <Image
                        alt="image"
                        className="hidden lg:flex z-10 p-1 h-20 w-20 rotate-[130deg] lg:rotate-[180deg] absolute -bottom-10 left-50 lg:-top-20 lg:-left-40 top-10 lg:h-[200px] lg:w-[200px]"
                        src="/images/arrow.png"
                        height={300}
                        width={300}
                      />
                      <div className="flex flex-col text-green-800">
                        <span className="text-4xl lg:text-7xl">
                          {product.title}
                        </span>
                        <span className="italic text-lg font-semibold text-black/[0.6]">
                          {product.description}
                        </span>
                      </div>
                      <Image
                        alt="image"
                        className="hidden lg:flex z-10 p-1 rotate-[30deg] lg:-rotate-[10deg] absolute -bottom-10 right-20 lg:-bottom-20 lg:-right-40 h-20 w-20 lg:h-[200px] lg:w-[200px]"
                        src="/images/arrow.png"
                        height={300}
                        width={300}
                      />
                    </span>
                  </div>
                </span>
              </div>
            ))}

            <div className="grid grid-cols-2 gap-2">
              <Link href="/" className="text-decoration-none text-black">
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

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 max-w-6xl">
            {Chapter.map((chapter, j) => (
              <Link
                onClick={() => setlastRead(chapter.id)}
                className="text-decoration-none baseBackgroundColor p-3 rounded-lg change relative"
                key={chapter.id}
                href={`/learning/${chapter?.id}`}
              >
                {lastRead == chapter.id && (
                  <div className="absolute right-0 top-0 bg-[#190d05]/[0.9] h-8 w-8 lg:h-14 lg:w-12 rounded-tr-md flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="lightgreen"
                      className="size-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                      />
                    </svg>
                  </div>
                )}

                <div className="baseTextColor">
                  <p className="font-bold text-xs lg:text-base">Ch : {j + 1}</p>
                  <p className="text-base lg:text-3xl font-bold uppercase tracking-tight">
                    {chapter?.chapter_name}
                  </p>

                  <p className="hidden md:block text-uppercase font-semibold italic font-mono text-justify">
                    {chapter?.chapter_description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Layout2>
    </>
  );
}
