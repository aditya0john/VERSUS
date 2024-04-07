import Itemstrip from "@/components/Itemstrip";
import Layout from "@/components/Layout";
import Layout2 from "@/components/Layout2";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function Courses() {
  const { data: session } = useSession();
  const [numberCopied, setNumberCopied] = useState(false);

  const copyPhoneNumber = () => {
    let num = "123-456-7890";

    navigator.clipboard
      .writeText(num)
      .then(() => {
        alert("Phone number copied");
        setNumberCopied(true);
        if (confirm("DO YOU WANT TO OPEN THIS NUMBER ?")) {
          window.open("tel:" + num, "_self");
        }
      })
      .catch((error) => {
        alert("Failed to copy phone number: " + error.message);
        console.error(error);
      });
  };

  const handleCopyClick = () => {
    copyPhoneNumber();
  };

  if (!session) {
    return (
      <main>
        <Layout>
          <div className="bg-white">
            <Itemstrip />
          </div>
          <div className="grid gap-1 bg-black rounded-lg flex flex-col items-center p-3">
            <div className=" border border-black rounded-lg w-full ">
              <p className="text-black shdg font-bold text-uppercase flex justify-center p-2">
                complaint form
              </p>
              <hr className="border border-black" />
              <form className="grid grid-cols-2 gap-2 p-2">
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    className="border border-black rounded-lg p-2 hover:bg-black hover:placeholder-white"
                    placeholder="NAME"
                  />
                  <input
                    type="email"
                    className="border border-black rounded-lg p-2 hover:bg-black hover:placeholder-white"
                    placeholder="E-mail"
                  />
                  <textarea
                    className="border border-black rounded-lg p-2 placeholder-black hover:bg-black hover:placeholder-white"
                    placeholder="Complaint"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-gray-300 hdg border border-black rounded flex items-center justify-center hover:bg-black hover:text-white hover:bg-black"
                >
                  SUBMIT{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="white"
                    class="w-20 h-20"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                </button>
              </form>
            </div>

            <div className="bg-gray-300 border border-black rounded-lg w-full ">
              <button onClick={handleCopyClick}>copy</button>
              <ul className="shdg font-bold text-uppercase flex justify-center p-2">
                contact us
              </ul>
              <hr className="border border-black" />
              <ul class="wrapper">
                <button>
                  <li class="icon Telephone">
                    <span class="tooltip">Telephone</span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="black"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>

                      <i class="fab fa-facebook-f"></i>
                    </span>
                  </li>
                </button>
                <button>
                  <li class="icon email">
                    <span class="tooltip">E-mail</span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="black"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>

                      <i class="fab fa-twitter"></i>
                    </span>
                  </li>
                </button>
              </ul>
            </div>

            <div className="bg-gray-300 border border-black rounded-lg w-full ">
              <ul className="shdg font-bold text-uppercase flex justify-center p-2">
                follow us on
              </ul>
              <hr className="border border-black" />
              <ul class="wrapper">
                <li class="icon facebook">
                  <span class="tooltip">Facebook</span>
                  <span>
                    <svg
                      class="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 8 19"
                      stroke="black"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <i class="fab fa-facebook-f"></i>
                  </span>
                </li>
                <li class="icon twitter">
                  <span class="tooltip">Twitter</span>
                  <span>
                    <svg
                      class="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                      stroke="black"
                    >
                      <path
                        fill="currentColor"
                        d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z"
                      />
                    </svg>
                    <i class="fab fa-twitter"></i>
                  </span>
                </li>
                <li class="icon instagram">
                  <span class="tooltip">Instagram</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none" stroke="black" stroke-width="1.5">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"
                        />
                        <path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z" />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m17.5 6.51l.01-.011"
                        />
                      </g>
                    </svg>
                    <i class="fab fa-instagram"></i>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Layout>
      </main>
    );
  }
  return (
    <main>
      <Layout2>
        <div className="bg-white">
          <Itemstrip />
        </div>
        <div className="grid gap-1 bg-white rounded-lg flex flex-col items-center p-3">
          <div className="bg-gray-100 border border-black rounded-lg w-full ">
            <ul className="text-black shdg font-bold text-uppercase flex justify-center p-2">
              complaint form
            </ul>
            <hr className="border border-black" />
            <form className="grid grid-cols-2 gap-2 p-2">
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  className="border border-black rounded-lg p-2 hover:bg-black hover:placeholder-white"
                  placeholder="NAME"
                />
                <input
                  type="email"
                  className="border border-black rounded-lg p-2 hover:bg-black hover:placeholder-white"
                  placeholder="E-mail"
                />
                <textarea
                  className="border border-black rounded-lg p-2 placeholder-black hover:bg-black hover:placeholder-white"
                  placeholder="Complaint"
                />
              </div>

              <button
                type="submit"
                className="bg-gray-200 hdg border border-black rounded flex items-center justify-center hover:bg-black hover:text-white hover:bg-black"
              >
                SUBMIT{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-20 h-20"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </button>
            </form>
          </div>

          <div className="bg-gray-100 border border-black rounded-lg w-full ">
            <ul className="shdg font-bold text-uppercase flex justify-center p-2">
              contact us
            </ul>
            <hr className="border border-black" />
            <ul class="wrapper">
              <button onClick={handleCopyClick}>
                <li class="icon Telephone">
                  <span class="tooltip">Telephone</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="black"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>

                    <i class="fab fa-facebook-f"></i>
                  </span>
                </li>
              </button>
              <button>
                <li class="icon email">
                  <span class="tooltip">E-mail</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="black"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>

                    <i class="fab fa-twitter"></i>
                  </span>
                </li>
              </button>
            </ul>
          </div>

          <div className="bg-gray-100 border border-black rounded-lg w-full ">
            <ul className="shdg font-bold text-uppercase flex justify-center p-2">
              follow us on
            </ul>
            <hr className="border border-black" />
            <ul class="wrapper">
              <li class="icon facebook">
                <span class="tooltip">Facebook</span>
                <span>
                  <svg
                    class="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 8 19"
                    stroke="black"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <i class="fab fa-facebook-f"></i>
                </span>
              </li>
              <li class="icon twitter">
                <span class="tooltip">Twitter</span>
                <span>
                  <svg
                    class="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                    stroke="black"
                  >
                    <path
                      fill="currentColor"
                      d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z"
                    />
                  </svg>
                  <i class="fab fa-twitter"></i>
                </span>
              </li>
              <li class="icon instagram">
                <span class="tooltip">Instagram</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none" stroke="black" stroke-width="1.5">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"
                      />
                      <path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z" />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m17.5 6.51l.01-.011"
                      />
                    </g>
                  </svg>
                  <i class="fab fa-instagram"></i>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Layout2>
    </main>
  );
}
