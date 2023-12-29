import Layout2 from "@/components/Layout2";
import Loading from "@/components/Loading";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProgLabs() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [ques, setQuestion] = useState(null);
  const [count, setCount] = useState(null);

  if (ques < 1) setQuestion(1);

  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/654480b712a5d376599430c1")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  } else if (!data) {
    return <p>No profile data</p>;
  }

  return (
    <main>
      <Layout2>
        <div className="h-screen bg-white rounded-lg p-1 gride">
          <aside className="bg-purple-200 rounded-lg m-1">
            <p className="p-2 pb-0 mb-0 shdg font-bold">Problems</p>
            <hr />
            <div className="bg-white rounded-lg m-2 p-2 flex gridd-cards">
              {data.record.map((x) => {
                if (!x.options) {
                  return (
                    <>
                      <span>
                        <Link
                          onClick={(e) => setQuestion(x.id)}
                          href={x.href}
                          target="iframe"
                          className=" w-10 justify-center flex box bg-yellow-200 p-2 rounded-full text-decoration-none text-black"
                        >
                          {x.id}
                        </Link>
                      </span>
                    </>
                  );
                }

                return (
                  <>
                    <span className="p-1">
                      <button
                        onClick={(e) => setQuestion(x.id)}
                        className="w-10 justify-center flex box bg-yellow-200 p-2 rounded-full text-decoration-none text-black"
                      >
                        {x.id}
                      </button>
                    </span>
                  </>
                );
              })}
            </div>
          </aside>

          <div className="bg-purple-200 rounded-lg m-1 grid">
            <div className="p-3">
              {data.record
                .filter((items) => {
                  return ques === null ? items.id === 1 : items.id === ques;
                })
                .map((x) => {
                  console.log("aaaaooaoaoaoaoaoa", x);

                  return (
                    <>
                      <div key={x.id} className="p-3 bg-white rounded-lg">
                        <form className="m-1">
                          <label>
                            <p className="text-uppercase shdg">
                              {x.id}. {x.question} ?
                            </p>
                          </label>
                          <div className="shdg">
                            b. {x.options[2]}
                            <input
                              className="m-2 p-"
                              type="radio"
                              name="options"
                              value={x.options[2]}
                            />
                            <br />
                            a. {x.options[1]}
                            <input
                              className="m-2 p-"
                              type="radio"
                              name="options"
                              value={x.options[1]}
                            />
                            <br />
                            c. {x.options[3]}
                            <input
                              className="m-2 p-"
                              type="radio"
                              name="options"
                              value={x.options[3]}
                            />
                          </div>
                        </form>
                      </div>
                    </>
                  );
                })}

              <div className="bg-white rounded-lg mt-2 p-3 flex justify-center gap-3">
                <button className="bg-gray-300 font-bold rounded-lg box p-3 flex gap-1 items-center">
                  SAVE
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
                </button>

                <button
                  onClick={() => {
                    setQuestion(ques - 1);
                  }}
                  className="bg-red-300 font-bold rounded box p-2 flex gap-1 items-center"
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
                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    />
                  </svg>
                  PREVIOUS
                </button>

                <button
                  onClick={() => {
                    setQuestion(ques + 1);
                  }}
                  className="bg-green-300 font-bold rounded box p-2 flex gap-1 items-center"
                >
                  NEXT
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
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div>
              <iframe className="h-full w-full rounded-lg" name="iframe" />
            </div>
          </div>
        </div>
      </Layout2>
    </main>
  );
}
