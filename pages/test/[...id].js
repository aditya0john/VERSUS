import Layout2 from "@/components/Layout2";
import Loading from "@/components/Loading";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Test() {
  let router = useRouter();
  const { id } = router.query;
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
        <div className="bg-white p-2 rounded-lg">
          <div className="flex justify-between">
            {Course.filter((x) => x._id == id).map((product, i) => (
              <div key={i}>
                <div className="p-3">
                  <p className="text-uppercase hdg font-bold user-select-none">
                    <div className="p-3">
                      <span className="flex justify-center font-extrabold bg-green-400 lg:bg-slate-200 lg:hover:bg-green-400 transform duration-200 rounded-xl p-2 my-2 w-[70vw] lg:w-full">
                        <Image
                          alt="image"
                          className="hidden lg:flex z-10 p-1 h-20 w-20 rotate-[130deg] lg:rotate-[180deg] absolute -bottom-10 left-50   lg:-top-20 lg:-left-40 top-10 lg:h-[200px] lg:w-[200px]"
                          src="/images/arrow.png"
                          height={300}
                          width={300}
                        />
                        {product.title} for {product.description}
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
              </div>
            ))}
          </div>
          <hr className="mb-10" />
          <div>
            {Course.filter((product) => product._id == id).map((product, i) => (
              <div className="grid grid-cols-2 gap-3" key={i}>
                {product.tests.map((test, j) => (
                  <>
                    <Link
                      className="text-decoration-none bg-orange-100 p-3 rounded box change_button"
                      key={j}
                      href={`/ProgLabs/testId=${test?._id}&courseId=${id}`}
                    >
                      <div>
                        test: {j + 1}
                        <div className="hdg font-bold pl-4 uppercase">
                          {test?.testName}
                        </div>
                        <p className="text-uppercase pl-4"></p>
                      </div>
                    </Link>
                  </>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Layout2>
    </main>
  );
}
