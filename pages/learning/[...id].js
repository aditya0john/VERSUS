import Layout2 from "@/components/Layout2";
import axios from "axios";
import Loading from "@/components/Loading";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ReactHtmlParser from "html-react-parser";
import Timer from "@/components/Timer";
import Image from "next/image";

function Learning() {
  const [isLoading, setLoading] = useState(true);
  const [course, setCourse] = useState([]);
  let [press, setPress] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const [selectedDivIndex, setSelectedDivIndex] = useState(1);
  const [parsedContent, setParsedContent] = useState("");
  const [showModal, setShowModal] = useState(true);
  const [divs, setDivs] = useState([]);

  console.log(selectedDivIndex);

  useEffect(() => {
    axios.get("/api/courses").then((response) => {
      setCourse(response.data);
      setLoading(false);
    });
  }, []);

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

  function ConfirmationModal({ onConfirm, color }) {
    return (
      <div
        className={`p-3 bg-${color}-100 rounded-lg flex items-center justify-center`}
      >
        <div className="modal-content grid grid-cols-2">
          {course.map((product, i) => (
            <div key={i}>
              {product.chapters
                .filter((product) => product._id == chapterId)
                .map((chapter, j) => (
                  <div key={j} className="grid grid-cols-2">
                    <div className="flex gap-3">
                      <Image
                        src="/images/C++.png"
                        alt="image"
                        width={100}
                        height={100}
                      />
                      <div className="grid grid-rows-2">
                        <div className="shdg font-bold">
                          {chapter?.chapterName}
                        </div>
                        <hr />
                        <div>{chapter?.summary}</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-end gap-10">
                      <button
                        className={`bg-${color}-200 phdg p-4 change rounded-lg`}
                        onClick={onConfirm}
                      >
                        LEARN
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  function handleCancel() {
    setShowModal(false);
    setPress(true);
  }

  const { chapterId, courseId } = parseQueryParams(router.query.id);

  // useEffect(() => {
  //   if (!id) return;
  //   const divs = document.querySelectorAll("div[id]");
  //   setDivs(divs);

  //   // Count the number of divs with id attribute
  //   const count = divs.length;
  //   console.log(`Number of divs with id attribute: ${count}`, divs);

  //   const selectedChapter = course
  //     .flatMap((product) => product.chapters)
  //     .find((chapter) => chapter._id == chapterId);

  //   if (selectedChapter) {
  //     setParsedContent(selectedChapter.content);
  //   }
  // }, [id, course, chapterId]);

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  if (!course) {
    return <p>No profile data</p>;
  }

  return (
    <main>
      <Layout2>
        <div className="sticky top-0 z-1">
          <Timer press={press} />
        </div>
        {course.map((product, i) => (
          <div key={i}>
            {showModal && (
              <div className="absolute inset-0 flex items-center justify-center">
                <ConfirmationModal onConfirm={handleCancel} color="gray" />
              </div>
            )}
            {product.chapters
              .filter((product) => product._id == chapterId)
              .map((chapter, j) => (
                <div
                  key={j}
                  className={`seashell rounded-lg ${showModal ? "blur " : ""}`}
                >
                  <div className="grido items-center">
                    <div className="shdg p-3 pb-0 text-uppercase font-bold">
                      <p className="hdg user-select-none">
                        {chapter?.chapterName}
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
                          {course
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
                            ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="m-2 h-full max-h-full">
                    <div className="bg-orange-100 w-full p-3 rounded-lg flex gap-4">
                      <p className="flex items-center phdg">TOPICS:</p>
                      {Array.from(document.querySelectorAll("div[id]")).map(
                        (div, index) => (
                          <button
                            className="items-center bradius p-4 bg-gray-300 flex-col change"
                            key={index}
                            onClick={() => setSelectedDivIndex(index)}
                          >
                            {index}
                          </button>
                        )
                      )}
                    </div>
                    <div className="bg-orange-100 p-3 rounded-lg mt-10">
                      {/* {ReactHtmlParser(divs[1]?.innerHTML)} */}
                      {/* {console.log(divs[1].innerText)} */}
                    </div>
                    <div className="scale-95 bg-orange-100 overflow-hidden rounded-lg p-4">
                      {ReactHtmlParser(chapter?.content)}
                      {/* {ReactHtmlParser(parsedContent)} */}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </Layout2>
    </main>
  );
}

export default Learning;
