import axios from "axios";
import { useRouter } from "next/router";
import { React, useState } from "react";

export default function ChapterForm({
  Chapter: exsistingChapter,
  Output: exsistingOutput,
  Summary: exsistingSummary,
}) {
  const [Chapter, setChapter] = useState(exsistingChapter || "");
  const [Output, setOutput] = useState(exsistingOutput || "");
  const [Summary, setSummary] = useState(exsistingSummary || "");
  const [goToChapter, setGoToChapter] = useState(false);
  const router = useRouter();

  async function createChapter(ev) {
    ev.preventDefault();
    const data = { Chapter, Output, Summary };
    await axios.post("/api/products", data);
    setGoToProducts(true);
  }

  if (goToChapter) {
    router.push("/products");
  }

  return (
    <form onSubmit={createChapter}>
      <div>
        <div className="bg-purple-200 rounded p-6 pl-2 pt-1 ">
          <label>Chapter Name</label>
          <input
            type="text"
            placeholder="enter Chapter name"
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
          />

          <label>Output images</label>
          <input
            type="text"
            placeholder="enter Output"
            value={Output}
            onChange={(ev) => setDescription(ev.target.value)}
          />

          <label>Chapter Summary</label>
          <input
            type="text"
            placeholder="enter Summary"
            value={Summary}
            onChange={(ev) => setPrice(ev.target.value)}
          />

          <button
            type="submit"
            className="btn flex mt-5 bg-yellow-400 text-black p-1 rounded-md"
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
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            ADD
          </button>
        </div>
      </div>
    </form>
  );
}
