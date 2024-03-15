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
                    <div className="dropdown bg-gray-200 rounded-lg change p-2">
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
                                    <li className="flex justi">
                                      <button
                                        className=" dropdown-item"
                                        onClick={() =>
                                          (window.location.href = `/learning/chapterId=${chapter?._id}&courseId=${id}`)
                                        }
                                      >
                                        <b>{product?.title}</b>{" "}
                                        <i>Chapter: {j + 1}</i>
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
                  <hr />
                  <div className="m-2 h-screen grido scrollbar">
                    <div className="bg-gray-300 box flex items-center justify-center p-2 rounded-lg border border-black m-1 mb-2 change_button">
                      <p className="p-3 m-1 rounded-lg shdg user-select-none">
                        <pre
                          dangerouslySetInnerHTML={{ __html: chapter.content }}
                        ></pre>
                      </p>
                    </div>

                    <div className="griddr overflow-y-scroll">
                      <div className="bg-gray-300 box flex items-center justify-center p-2 rounded-lg border border-black m-1 mb-2 change_button">
                        <div className="shdg p-3 pb-0 text-uppercase user-select-none">
                          code example with output
                        </div>
                        <hr />
                        <img
                          className="p-3 border border black m-1 rounded-lg"
                          src=""
                          alt="images"
                          F
                        />
                      </div>

                      <div className="bg-gray-300 flex box items-center justify-center p-2 rounded-lg border border-black m-1 mb-2 change_button">
                        <div className="p-3 pb-0 ">
                          <p className="shdg text-uppercase user-select-none">
                            chapter summary
                          </p>
                          <p className="p-3 m-1 user-select-none">
                            <pre>{chapter.content}</pre>{" "}
                          </p>
                        </div>
                      </div>
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
