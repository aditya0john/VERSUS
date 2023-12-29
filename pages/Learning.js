import Layout2 from "@/components/Layout2";
import React from "react";

function Learning() {
  return (
    <main>
      <Layout2>
        <div className="bg-white rounded-lg">
          <div className="shdg p-3 pb-0 text-uppercase">
            chapter number : chapter name
          </div>
          <hr />
          <div className="m-2 h-screen grido scrollbar ">
            <div className="bg-purple-200 rounded m-1 mb-2">
              <p className="p-3 bg-yellow-100 m-1 rounded-lg"></p>
            </div>

            <div className="griddr overflow-y-scroll">
              <div className="bg-purple-200 rounded-lg m-1 mb-0">
                <div className="shdg p-3 pb-0 text-uppercase">
                  code example with output
                </div>
                <hr />
                <img
                  className="p-3 bg-yellow-100 m-1 rounded-lg"
                  src=""
                  alt="images"
                />
              </div>

              <div className="bg-purple-200 rounded-lg m-1 mb-2">
                <div className="shdg p-3 pb-0 text-uppercase">summary</div>
                <hr />
                <p className="p-3 bg-yellow-100 m-1 rounded-lg"></p>
              </div>
            </div>
          </div>
        </div>
      </Layout2>
    </main>
  );
}

export default Learning;
