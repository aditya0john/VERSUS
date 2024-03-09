import Layout from "@/components/Layout";
import Layout2 from "@/components/Layout2";
import Cards from "@/components/Cards";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import Table from "@/components/Table";
import { Helmet } from "react-helmet";

export default function Home() {
  const { data: session } = useSession();
  console.log({ session });

  let [Institutions, setInstitutions] = useState(100000);
  let [Teacher, setTeacher] = useState(66000);
  let [Learners, setLearners] = useState(1205330);
  let [Meetings, setMeetings] = useState(10652);
  let [Tests, setTests] = useState(10000);
  let [Assignments, setAssignments] = useState(10500);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  Institutions = numberWithCommas(Institutions);
  Teacher = numberWithCommas(Teacher);
  Learners = numberWithCommas(Learners);
  Meetings = numberWithCommas(Meetings);
  Tests = numberWithCommas(Tests);
  Assignments = numberWithCommas(Assignments);

  if (!session) {
    return (
      <main className="w-full h-full">
        <Helmet>
          <meta
            name="google-site-verification"
            content="J_0M0hd_RSV3Hh9FuXKVfvIYDNJAiG1JHd0ylGrP3tk"
          />
        </Helmet>
        <Layout>
          <div className="bg-white  gridd boxx p-4 gap-5 bottom_round">
            <div className="flex items-center">
              <img className="p-1" src="/images/LOGO.gif" width={300} />
            </div>

            <div className="flex gap-20 justify-center text-center items-center">
              <div className="uppercase text-black hdg flex-row">
                Your Virtual University, in minutes!
                <p className="lowercase shdg text-black">
                  Online Classes, Assesments, proctored Exams, Assignments, Auto
                  Grading, Plagrism check ----All in one platform.
                </p>
                <hr className="border border-black" />
                <Link
                  href="/"
                  className="box text-decoration-none border border-black rounded-lg p-3 px-4 shdg change_button"
                >
                  BECOME A STUDENT
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-full text-black p-3 mt-3">
            <div className="gridd-data gap-4 p-10 boxx rounded-full">
              <span className="border border-black shdg round text-center box change_button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  class="w-20 h-20"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                  />
                </svg>

                <span>{Institutions}</span>
                <p className="font-bold">Institution's</p>
              </span>

              <span className="border border-black shdg round text-center box change_button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  class="w-20 h-20"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>

                <span>{Teacher}</span>
                <p className="font-bold"> Teacher's</p>
              </span>

              <span className="border border-black shdg round text-center box change_button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  class="w-20 h-20"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>

                <span>{Learners}</span>
                <p className="font-bold">Learner's</p>
              </span>

              <span className="border border-black shdg round text-center box change_button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  class="w-20 h-20"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                  />
                </svg>

                <span>{Meetings}</span>
                <p className="font-bold">Meeting's</p>
              </span>

              <span className="border border-black shdg round text-center box change_button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  class="w-20 h-20"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                  />
                </svg>

                <span>{Tests}</span>
                <p className="font-bold">Test's</p>
              </span>

              <span className="border border-black shdg round text-center box change_button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  class="w-20 h-20"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
                  />
                </svg>

                <span>{Assignments}</span>
                <p className="font-bold">Assignment's</p>
              </span>
            </div>
          </div>

          {/* <div className="carouselslide m-20">
            <div
              id="carouselExampleAutoplaying"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="/images/logo.png"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/images/logo_inverted.png"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon btn rounded-full bg-black"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden ">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon btn rounded-full bg-black"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div> */}

          <div className="mt-3 bg-white bradius">
            <div className="pt-3 text-black hdg uppercase font-bold justify-center flex">
              versus
            </div>
            <hr className="border border-black" />

            <div className="scale-95 grid grid-cols-2 items-center h-screen">
              <div className="flex justify-center">
                <img
                  src="/images/practoring.gif"
                  alt="image"
                  width={400}
                  height={400}
                />
              </div>

              <div className="grid">
                <div className="grid grid-rows-2">
                  <h3 className="hdg text-black">
                    AI assisted assessment platform with :- Online Remote
                    Proctoring
                  </h3>

                  <h3 className="shdg text-gray-400 ">
                    Comprehensive remote Assessment platform with support for a
                    variety of tests & an ultra-powerful remote proctoring
                    solution for uncontrollable test-taker environments.
                  </h3>
                </div>
                <hr className="text-black" />
                <ol className="text-black">
                  <li>
                    • Secure: 2-factor authentication based access,
                    organizational role based
                  </li>

                  <li>
                    • Comprehensive composite recording and playback of all
                    aspects of a test, including multiple cameras, screen,
                    times, navigation activity, locations, answers, multiple
                    audio streams
                  </li>
                  <li>
                    • Automatic blocking of bad actors with complete control for
                    proctor to extend or terminate the test
                  </li>
                  <li>
                    • Over 200 knobs to design and schedule tests from a variety
                    of auto-evaluated and manually evaluated question types
                  </li>
                  <li>
                    • Auto-evaluated question types include computer programming
                    in multiple languages, variants of multiple choice, fill in
                    the blanks, numerical type, match columns, spoken english,
                    reading comprehension, listening comprehension, etc.
                  </li>
                  <li>
                    • Manually evaluated question types include subjective
                    essay, viva voce, document upload, etc.
                  </li>

                  <li>• Evaluation audit trails</li>

                  <li>
                    • Unlimited test support with complete data isolation by
                    domain
                  </li>

                  <li>• Plagiarism reports</li>

                  <li>• Rich analytics</li>

                  <li>
                    • Consolidated test reports for various audit and
                    accreditation requirements
                  </li>

                  <li>Optional access to our extensive question banks</li>
                </ol>
              </div>
            </div>
            <hr className="border border-black border-5" />
            <div className="scale-95 grid grid-cols-2 items-center h-screen">
              <div className="grid grid-rows-2">
                <h3 className="hdg text-black">Live Meetings</h3>

                <h3 className="phdg text-gray-400">
                  Secure Online conferencing from any device on even low
                  bandwidth network at an unbelieveable price
                </h3>

                <hr className="text-black" />
                <ol className="text-black">
                  <li>
                    • Secure: 2-factor authentication based access,
                    organizational role based access control, encryption over
                    wire, encryption at rest
                  </li>
                  <li>
                    • No apps or special devices needed. A modern browsers on
                    any PC or mobile phone is all that is needed
                  </li>
                  <li>
                    • Unlimited secure cloud stored recordings, with video
                    indexing, rich composite recording playback
                  </li>
                  <li>
                    • Powerful time-table manager for scheduled meetings. One
                    click ad-hoc hosting with easy participant selection
                  </li>
                  <li>
                    • Adaptive bitrate control, specially tuned for low
                    bandwidth situations
                  </li>
                  <li>
                    • Rich feature-set for teachers such as Second Device™
                    technology, support for chalkboard, pen & paper based
                    teaching, shared whiteboards, real-time annotations,
                    synchronized video playback for all participants,
                    synchronized powerpoint sharing, live polls, engagement
                    tracking, etc.
                  </li>
                </ol>
              </div>

              <div className="flex justify-center">
                <img
                  src="/images/Remote Study.gif"
                  alt="image"
                  width={400}
                  height={400}
                />
              </div>
            </div>
            <hr className="border border-black border-5" />
            <div className="scale-95 grid grid-cols-2 items-center h-screen">
              <div className="flex justify-center">
                <img
                  src="/images/University.gif"
                  alt="image"
                  width={400}
                  height={400}
                />
              </div>

              <div>
                <div className="grid grid-rows-2">
                  <p className="hdg text-black"> Virtual University</p>

                  <p className="shdg text-gray-400">
                    Online Classes + LMS + Assessments + Remote Proctoring +
                    Interactive Courses
                  </p>
                </div>
                <hr className="text-black" />
                <ol className="text-black">
                  <li>
                    • Powerful leaming management system (LMS) with complete
                    data isolation between different schools
                  </li>
                  <li>
                    • Organizations & user management with role based access
                    control with secure multi-factor authentication
                  </li>
                  <li>
                    • Curriculum management, controllable at individual as well
                    as organization hierarchy level
                  </li>
                  <li>
                    • Rich online course authoring & design with support for
                    rich media, animations, etc.
                  </li>
                  <li>
                    • Auto-evaluated question types include computer programming
                    in multiple languages, variants of multiple choice, fill in
                    the blanks, numerical type, match columns, spoken english,
                    reading comprehension, listening comprehension, etc.
                  </li>
                  <li>
                    • Manually evaluated question types include subjective
                    essay, viva voce, document upload, etc.
                  </li>
                  <li>• Timed assignments and self-paced exercises</li>
                  <li>
                    • Testing and assessment platform with remote proctoring
                  </li>
                  <li>• Secure digital vault for question banks</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 mt-3 up_round">
            <div className="text-black phdg">
              Customers
              <h3 className="shdg text-gray-400 mb-4">
                Listed below are a small subset of our customers
              </h3>
            </div>

            <Table />
          </div>
        </Layout>
      </main>
    );
  } else {
    return (
      <main className="w-full h-full">
        <Layout2>
          <div className="bg-white m-0 rounded">
            <div className="scale-50 grid grid-cols-3 gap-10 ml-5 mr-5">
              <Cards
                text="click here to view all your courses/subjects"
                button="COURSES"
                src="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                href="/Courses"
              />
              <Cards
                text="click here to go to code editor"
                button="CODE EDITOR"
                src="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                href="/Coding"
              />
              <Cards
                text="click here to access tools"
                button="TOOLS"
                src="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                href="/Tools"
              />
              <Cards
                text="click here to reach us"
                button="HELP AND SUPPORT"
                src="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                href="/Help&Support"
              />
            </div>
          </div>
        </Layout2>
      </main>
    );
  }
}
