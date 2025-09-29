import Layout2 from "@/components/Layout2";
import Loading from "@/components/Loading";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Timer from "@/components/Timer";
import Image from "next/image";

import { supabase } from "@/lib/supabaseClient";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";

function Learning() {
  const [isLoading, setLoading] = useState(true);
  const [Chapter, setChapterData] = useState([]);
  let [press, setPress] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    if (!id) return;

    async function fetchData() {
      const { data, error } = await supabase
        .from("chapters")
        .select("*")
        .eq("id", id);

      if (error) {
        console.error("Error fetching chapter data:", error);
      } else {
        console.log("ChapterData", data);
        setChapterData(data);
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  function parseQueryParams(queryId) {
    let chapterId, courseId;

    if (Array.isArray(queryId) && queryId.length > 0) {
      const queryString = queryId[0];
      const queryParams = queryString.split("&");

      for (const param of queryParams) {
        const [key, value] = param.split("=");

        if (key === "chapterId") {
          chapterId = value;
        }

        if (key === "courseId") {
          courseId = value;
        }
      }
      return { chapterId, courseId };
    } else {
      console.error(
        "router.query.id is not an array with at least one element"
      );
      return { chapterId: null, courseId: null };
    }
  }

  function ConfirmationModal({ onConfirm, text }) {
    if (!text) {
      return (
        <div
          className={`p-3 bg-gray-100 rounded-lg flex items-center justify-center`}
        >
          <div className="max-w-4xl">
            {Chapter.map((chapter, i) => (
              <div key={i}>
                <div className="grid grid-cols-2">
                  <div className="flex gap-3 items-center">
                    <Image
                      src="/images/C++.png"
                      alt="image"
                      width={100}
                      height={100}
                    />
                    <div className="flex flex-col max-w-2xl">
                      <div className="text-2xl font-bold uppercase">
                        {chapter?.chapterName}
                      </div>
                      <hr />
                      <div>{chapter?.summary}</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-end">
                    <button
                      className={`bg-gray-400/[0.4] phdg p-4 hover:text-white hover:bg-black transition duration-200 rounded-lg`}
                      onClick={onConfirm}
                    >
                      LEARN
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }

  function handleCancel() {
    setShowModal(false);
    setPress(true);
  }

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  if (!id) {
    return <p>No profile data</p>;
  }

  return (
    <main>
      <Layout2>
        <div className="sticky top-4 mx-2 my-4 z-1">
          <Timer press={press} />
        </div>
        {Chapter.map((chapter, i) => (
          <div key={i}>
            {showModal && (
              <div className="inset-0 flex items-center justify-center absolute top-40 z-10">
                <ConfirmationModal onConfirm={handleCancel} />
              </div>
            )}

            <div
              className={`seashell rounded-lg ${
                showModal ? "blur-lg overflow-hidden h-[80vh]" : ""
              }`}
            >
              <div className="flex justify-around items-center w-[100vw] border-b-2 overflow-hidden">
                <div className="p-3 pb-0 text-uppercase font-bold">
                  <p className="text-uppercase hdg font-bold user-select-none">
                    <div className="p-3">
                      <span className="flex justify-center font-extrabold text-green-800 bg-green-400 lg:bg-slate-200 lg:hover:bg-green-400 transform duration-200 rounded-xl p-2 my-2 w-[70vw] lg:w-full">
                        <Image
                          alt="image"
                          className="hidden lg:flex z-10 p-1 h-20 w-20 rotate-[130deg] lg:rotate-[180deg] absolute -bottom-10 left-50   lg:-top-20 lg:-left-40 top-10 lg:h-[200px] lg:w-[200px]"
                          src="/images/arrow.png"
                          height={300}
                          width={300}
                        />
                        {chapter?.chapter_name}
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
                <div className="flex gap-4 justify-center">
                  <div className="dropdown bg-orange-100 rounded-lg p-2">
                    <button
                      className="p-2 dropdown-toggle "
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Chapter Summary
                    </button>
                    <ul className="dropdown-menu">
                      <li className="dropdown-item text-gray-400 hover:text-white">
                        {chapter?.summary}
                        <ConfirmationModal
                          onConfirm={handleCancel}
                          text={chapter?.summary}
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="flex gap-2 items-center dropdown bg-orange-100 rounded-lg  p-2">
                    {/* Render other content */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                      />
                    </svg>
                    <button
                      className="p-2 dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Select Chapter
                    </button>
                    <ul className=" dropdown-menu">
                      {/* {course
                        .filter((product) => product._id == courseId)
                        .map((product, i) => (
                          <div
                            key={i}
                            className="text-gray-400 hover:text-white"
                          >
                            {product.chapters.map((chapter, j) => (
                              <li key={j}>
                                <button
                                  className="p-0 dropdown-item"
                                  onClick={() =>
                                    (window.location.href = `/learning/chapterId=${chapter?._id}&courseId=${id}`)
                                  }
                                >
                                  <p className="flex justify-center pt-2">
                                    {`${product?.title}` +
                                      " - Chapter: " +
                                      (j + 1)}
                                  </p>
                                </button>
                              </li>
                            ))}
                          </div>
                        ))} */}
                    </ul>
                  </div>
                </div>
              </div>

              <hr />

              <div className="flex items-center justify-center">
                <div className="bg-gray-200 min-h-screen max-w-7xl p-4 rounded-xl">
                  {Chapter.map(({ content, id }) => (
                    <div key={id}>
                      <Markdown
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeRaw, rehypeHighlight]}
                      >
                        {content}
                      </Markdown>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Layout2>
    </main>
  );
}

export default Learning;
