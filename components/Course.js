import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

export default function Course() {
  let [Chapters, setChapters] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("/api/courses").then((response) => {
      setChapters(response.data);
    });
  }, []);

  return (
    <>
      <div>
        <form>
          <div className="p-3 flex gap-2">
            <input
              onChange={(e) => setSearch(e.target.value)}
              className="rounded-md bg-purple-300 p-2 w-full"
              type="text"
              placeholder="Enter Course name"
            />

            <button className="bg-purple-300 rounded p-2 flex items-center">
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

          {Chapters.filter((items) => {
            return search.toLocaleLowerCase() === ""
              ? items
              : items.title.toLocaleLowerCase().includes(search);
          }).map((Chapter) => {
            return (
              <div className="box rounded-lg">
                <div className="mt-6 bg-purple-200 rounded-lg gridd-courses">
                  <div className="bg-purple-300 rounded-l-lg justify-center flex items-center">
                    <img className="p-1" src={"/"} alt="image" />
                  </div>

                  <div className="flex-col pt-2">
                    <Link
                      href={"/"}
                      className="shdg font-bold pl-4 text-decoration-none text-black"
                    >
                      {Chapter?.title}
                    </Link>
                    <hr />
                    <p className="pl-4">{Chapter?.description}</p>
                  </div>

                  <Link
                    href={"/LearnCPP"}
                    className="bg-purple-300 rounded-r-lg flex items-center justify-center text-black"
                  >
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
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </form>
      </div>
    </>
  );
}
