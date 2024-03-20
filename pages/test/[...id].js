import Layout2 from "@/components/Layout2";
import Loading from "@/components/Loading";
import axios from "axios";
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
                <p className="text-uppercase hdg user-select-none">
                  {product.title} Tests
                </p>
              </div>
            ))}
          </div>
          <hr className="mb-10" />
          <div>
            {Course.filter((product) => product._id == id).map((product, i) => (
              <div className="grid grid-cols-2 gap-2" key={i}>
                {product.tests.map((test, j) => (
                  <>
                    <Link
                      className="text-decoration-none rect box change_button"
                      key={j}
                      href={`/ProgLabs/testId=${test?._id}&courseId=${id}`}
                    >
                      <div>
                        test: {j + 1}
                        <div className="hdg font-bold pl-4 uppercase">
                          {test?.testName}
                        </div>
                        <hr />
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
