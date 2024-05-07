import { useState, useEffect } from "react";

import Link from "next/link";
import axios from "axios";
import Loading from "./Loading";
import Cards from "./Cards";

export default function Course() {
  const [search, setSearch] = useState("");
  const [isLoading, setLoading] = useState(true);
  let [Course, setCourse] = useState([]);
  const [randomColor, setRandomColor] = useState("");

  useEffect(() => {
    axios.get("/api/courses").then((response) => {
      setCourse(response.data);
      setLoading(false);
    });

    const colors = ["red", "yellow", "green", "blue", "gray", "purple", "pink"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    setRandomColor(colors[randomIndex]);
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
              className="bg-white text-black rounded-md border border-black p-2 w-full change hover:placeholder-white"
              type="text"
              placeholder="Enter Course name"
            />

            <button className="bg-white border border-black rounded p-2 flex items-center change">
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
          <div className="grid grid-cols-3 gap-4 m-10">
            {Course.filter((items) => {
              return search.toLocaleLowerCase() === ""
                ? items
                : items.title.toLocaleLowerCase().includes(search);
            }).map((Course) => {
              return (
                <span className="card">
                  <Cards
                    SVG={Course?.title}
                    href={"/chapters/" + Course?._id}
                    color={"orange"}
                    text={Course?.title + " " + Course?.description + " Course"}
                    button={"OPEN COURSE"}
                  />
                </span>
              );
            })}
          </div>
        </form>
      </div>
    </>
  );
}
