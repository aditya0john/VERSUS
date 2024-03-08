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

  return (
    <main>
      <Layout2>
        {Course.map((product, i) => (
          <div key={i}>
            {product.chapters
              .filter((product) => product._id == id)
              .map((chapter, j) => (
                <div key={j} className="bg-white rounded-lg">
                  <div className="shdg p-3 pb-0 text-uppercase font-bold">
                    <p className="hdg">{chapter.chapterName}</p>
                  </div>
                  <hr />
                  <div className="m-2 h-screen grido scrollbar">
                    <div className="bg-gray-300 box flex items-center justify-center p-2 rounded-lg border border-black m-1 mb-2 change_button">
                      <p className="p-3 m-1 rounded-lg shdg">
                        {chapter.content}
                      </p>
                    </div>

                    <div className="griddr overflow-y-scroll">
                      <div className="bg-gray-300 box flex items-center justify-center p-2 rounded-lg border border-black m-1 mb-2 change_button">
                        <div className="shdg p-3 pb-0 text-uppercase">
                          code example with output
                        </div>
                        <hr />
                        <img
                          className="p-3 border border black m-1 rounded-lg"
                          src=""
                          alt="images"
                        />
                      </div>

                      <div className="bg-gray-300 flex box items-center justify-center p-2 rounded-lg border border-black m-1 mb-2 change_button">
                        <div className="p-3 pb-0 ">
                          <p className="shdg text-uppercase">chapter summary</p>
                          <p className="p-3 m-1">{chapter.content}</p>
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
