import { useState, useEffect } from "react";

import Link from "next/link";
import axios from "axios";
import Loading from "./Loading";

export default function Course() {
  const [search, setSearch] = useState("");
  const [isLoading, setLoading] = useState(true);
  let [Course, setCourse] = useState([]);

  useEffect(() => {
    axios.get("/api/courses").then((response) => {
      setCourse(response.data);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-row justify-center items-center h-screen">
        <div>
          <Loading />
        </div>
      </div>
    );
  } else if (!Course) {
    return <p>No profile data</p>;
  }

  return (
    <>
      <div>
        <form>
          <div className="p-3 flex gap-2">
            <input
              onChange={(e) => setSearch(e.target.value)}
              className="text-black rounded-md border border-black p-2 w-full change"
              type="text"
              placeholder="Enter Course name"
            />

            <button className="border border-black rounded p-2 flex items-center hover:bg-black hover:text-white">
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
                  d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                />
              </svg>
            </button>
          </div>

          <hr className="mb-20" />
          <div className="griddd gap-2 m-10">
            {Course.filter((items) => {
              return search.toLocaleLowerCase() === ""
                ? items
                : items.title.toLocaleLowerCase().includes(search);
            }).map((Course) => {
              return (
                <Link
                  href={"/chapters/" + Course?._id}
                  className="text-decoration-none rect box change_button"
                >
                  <span className="mt-3 text-center box">
                    <p className="hdg font-bold flex gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1"
                        stroke="currentColor"
                        class="w-20 h-20"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                        />
                      </svg>
                      {Course?.title}
                    </p>
                    <hr />
                    <p className="font-bold">Type: {Course?.description}</p>
                    <p className="font-bold">cost: Rs.{Course?.price}</p>
                  </span>
                </Link>
              );
            })}
          </div>
        </form>
      </div>
    </>
  );
}
