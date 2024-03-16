import Layout2 from "@/components/Layout2";
import axios from "axios";
import Loading from "@/components/Loading";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function Learning() {
  const [isLoading, setLoading] = useState(true);
  let [Course, setCourse] = useState([]);
  let router = useRouter();
  let { id } = router.query;

  let chapterId, courseId;
  // Ensure router.query.id is defined and is an array with at least one element
  if (Array.isArray(router.query.id) && router.query.id.length > 0) {
    // Access the first element of the array
    const queryString = router.query.id[0];

    // Split the query string by '&' to separate key-value pairs
    const queryParams = queryString.split("&");

    // Loop through each key-value pair
    for (const param of queryParams) {
      // Split the key-value pair by '=' to separate key and value
      const [key, value] = param.split("=");

      // Check if the key is 'chapterId'
      if (key === "chapterId") {
        chapterId = value;
      }

      // Check if the key is 'courseId'
      if (key === "courseId") {
        courseId = value;
      }
    }

    console.log("Test ID:", chapterId);
    console.log("Course ID:", courseId);
  } else {
    console.error("router.query.id is not an array with at least one element");
  }
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
  console.log(Course);
  return (
    <main>
      <Layout2>
        {Course.map((product, i) => (
          <div key={i}>
            {product.chapters
              .filter((product) => product._id == chapterId)
              .map((chapter, j) => (
                <div key={j} className="bg-white rounded-lg ">
                  <div className="flex justify-between mr-10 items-center">
                    <div className="shdg p-3 pb-0 text-uppercase font-bold">
                      <p className="hdg">{chapter.chapterName}</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="dropdown bg-gray-200 rounded-lg change p-2">
                        <button
                          classname="p-2 dropdown-toggle text-black"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Chapter Summary
                        </button>
                        <ul className="dropdown-menu">
                          <li className="dropdown-item ">{chapter?.summary}</li>
                        </ul>
                      </div>
                      <div className="flex gap-2 dropdown bg-gray-200 rounded-lg change p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                          />
                        </svg>

                        <button
                          classname="p-2 dropdown-toggle text-black"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Select Chapter
                        </button>

                        <ul className="dropdown-menu">
                          {Course.filter(
                            (product) => product._id == courseId
                          ).map((product, i) => (
                            <div key={i}>
                              {product.chapters.map((chapter, j) => {
                                {
                                  return (
                                    <>
                                      <li>
                                        <button
                                          className="p-0 dropdown-item"
                                          onClick={() =>
                                            (window.location.href = `/learning/chapterId=${chapter?._id}&courseId=${id}`)
                                          }
                                        >
                                          <p className="flex justify-center pt-1">
                                            <b>{product?.title}</b>{" "}
                                            <i>Chapter: {j + 1}</i>
                                          </p>
                                          <hr />
                                        </button>
                                      </li>
                                    </>
                                  );
                                }
                              })}
                            </div>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="m-2 h-screen scrollbar">
                    <div className="scale-95 bg-gray-200 rounded-lg p-4">
                      <p
                        className="rounded-lg shdg user-select-none"
                        dangerouslySetInnerHTML={{ __html: chapter.content }}
                      ></p>
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
