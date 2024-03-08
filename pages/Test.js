import Layout3 from "@/components/Layout3";
import Loading from "@/components/Loading";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Test() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/6544805e12a5d376599430a6")
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
      <Layout3>
        <div className="h-screen">
          <div className="bg-white grid grid-cols-3 gap-3 mt-10">
            {data.record.map((x) => {
              console.log("X", x);
              return (
                <>
                  <Link
                    className="text-decoration-none rect box change_button"
                    href={x.href}
                  >
                    <div key={x.id}>
                      TEST {x.id}
                      <div>
                        <hr />
                        <div className="flex-col">
                          <p className="shdg font-bold text-uppercase">
                            {x.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </>
              );
            })}
          </div>
        </div>
      </Layout3>
    </main>
  );
}
