import Layout from "@/components/Layout";
import Layout2 from "@/components/Layout2";
import Cards from "@/components/Cards";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import Table from "@/components/Table";
import Carousel from "@/components/Carousel";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();
  console.log({ session });

  let [Institutions, setInstitutions] = useState(1200);
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
      <main className="user-select-none">
        <Layout>
          <div className="bg-slate-50 mt-3 flex justify-around ">
            <div className="hidden lg:flex items-center justify-center">
              <Image
                alt="image"
                className="p-1"
                src="/images/LOGO.gif"
                height={300}
                width={300}
              />
            </div>

            <div className="flex justify-center text-center items-center">
              <div className="uppercase hdg thdg">
                <h1 className="text-4xl lg:text-7xl text-black font-extrabold tracking-tight flex flex-col items-center">
                  Your{""}
                  <br />{" "}
                  <div className="flex">
                    <Image
                      alt="arrow image"
                      className="p-1 -rotate-[75deg] lg:-rotate-[75deg] absolute top-20 lg:top-20 z-10 h-28 w-28 lg:h-[200px] lg:w-[200px]"
                      src="/images/arrow.png"
                      height={300}
                      width={300}
                    />
                    <span className="max-w-xs lg:max-w-5xl font-extrabold baseTextColor bg-slate-200 lg:hover:bg-green-400 transform duration-200 rounded-xl p-2 my-2 w-[70vw] lg:w-full">
                      Virtual University
                      <Image
                        alt="arrow image"
                        className="p-1 -rotate-[34deg] lg:rotate-[80deg] absolute -bottom-10 right-0 md:-right-0 lg:-bottom-40 lg:-right-10 h-28 w-28 lg:h-[200px] lg:w-[200px]"
                        src="/images/arrow.png"
                        height={300}
                        width={300}
                      />
                    </span>
                  </div>
                  <span>
                    , in minutes<span className="font-extrabold">!!</span>
                  </span>
                </h1>

                <Link
                  href="/SignUp"
                  className="makeLine text-decoration-none border-2 border-black rounded-full p-3 px-4 shdg change_button"
                >
                  BECOME A STUDENT
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 p-4 mb-10 mt-20 md:grid-cols-6 w-full">
            <span className="w-26 h-26 bg-orange-100 shdg round flex flex-col items-center p-3 text-center text-black hover:bg-orange-300/[0.4] hover:shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="orange"
                class="w-12 h-12 sm:w-20 sm:h-20"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                />
              </svg>

              <span>{Institutions}</span>
              <p className="font-semibold text-xl">Institution&apos;s</p>
            </span>

            <span className="w-26 h-26 bg-purple-100 shdg round flex flex-col items-center p-3 text-center text-black hover:bg-purple-400/[0.4] hover:shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="purple"
                class="w-12 h-12 sm:w-20 sm:h-20"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>

              <span>{Teacher}</span>
              <p className="font-semibold text-xl"> Teacher&apos;s</p>
            </span>

            <span className="w-26 h-26 bg-blue-100 shdg round flex flex-col items-center p-3 text-center text-black hover:bg-blue-400/[0.4] hover:shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="blue"
                class="w-12 h-12 sm:w-20 sm:h-20"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>

              <span>{Learners}</span>
              <p className="font-semibold text-xl">Learner&apos;s</p>
            </span>

            <span className="w-26 h-26 bg-gray-200 shdg round flex flex-col items-center p-3 text-center text-black hover:bg-gray-400/[0.4] hover:shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="gray"
                class="w-12 h-12 sm:w-20 sm:h-20"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                />
              </svg>

              <span>{Meetings}</span>
              <p className="font-semibold text-xl">Meeting&apos;s</p>
            </span>

            <span className="w-26 h-26 bg-red-100 shdg round flex flex-col items-center p-3 text-center text-black hover:bg-red-400/[0.4] hover:shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="red"
                class="w-12 h-12 sm:w-20 sm:h-20"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                />
              </svg>

              <span>{Tests}</span>
              <p className="font-semibold text-xl">Test&apos;s</p>
            </span>

            <span className="w-26 h-26 bg-green-100 shdg round flex flex-col items-center p-3 text-center text-black hover:bg-green-400/[0.4] hover:shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="green"
                class="w-12 h-12 sm:w-20 sm:h-20"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
                />
              </svg>

              <span>{Assignments}</span>
              <p className="font-semibold text-xl">Assignment&apos;s</p>
            </span>
          </div>

          <Carousel />

          <div className="mt-3 baseBackgorundColor bradiups p-4">
          <div className="flex flex-col lg:grid grid-cols-[1fr_2fr] items-center justify-center gap-4 mt-8">
              <div className="flex justify-center items-center">
                <Image
                  src="/images/practoring.gif"
                  alt="image"
                  width={400}
                  height={400}
                  className="max-w-xs lg:max-w-7xl"
                />
              </div>

              <div className="space-y-4">
                <div className="space-y-2 flex flex-col">
                  <h3 className="text-black/[0.8] text-justify text-3xl lg:text-5xl font-bold font-sans capitalize">
                    AI Assisted Assessment Platform With :- Online Remote
                    Proctoring
                  </h3>
                  <h3 className="text-2xl lg:text-3xl text-justify text-black/[0.6] tracking-tight">
                    Comprehensive remote Assessment platform with support for a
                    variety of tests & an ultra-powerful remote proctoring
                    solution for uncontrollable test-taker environments.
                  </h3>
                </div>

                <ol className="bg-slate-200/[0.5] p-2 rounded-lg text-black/[0.8] text-justify font-semibold text-sm md:text-lg space-y-2 list-inside list-disc">
                  <li>
                    Secure: 2-factor authentication based access, organizational
                    role based
                  </li>
                  <li>
                    Comprehensive composite recording and playback of all
                    aspects of a test, including multiple cameras, screen,
                    times, navigation activity, locations, answers, multiple
                    audio streams
                  </li>
                  <li>
                    Automatic blocking of bad actors with complete control for
                    proctor to extend or terminate the test
                  </li>
                  <li>
                    Over 200 knobs to design and schedule tests from a variety
                    of auto-evaluated and manually evaluated question types
                  </li>
                  <li>
                    Manually evaluated question types include subjective essay,
                    viva voce, document upload, etc.
                  </li>
                  <li> Evaluation audit trails</li>
                  <li>
                    Unlimited test support with complete data isolation by
                    domain
                  </li>
                  <li> Plagiarism reports</li>
                  <li> Rich analytics</li>
                  <li>
                    Consolidated test reports for various audit and
                    accreditation requirements
                  </li>
                  <li>Optional access to our extensive question banks</li>
                </ol>
              </div>
            </div>

            <div className="flex flex-col-reverse lg:grid grid-cols-[2fr_1fr] items-center justify-center gap-4 mt-8">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-black/[0.8] text-justify text-3xl lg:text-5xl font-bold font-sans capitalize">
                    Live Meetings
                  </h3>
                  <h3 className="text-2xl lg:text-3xl text-justify text-black/[0.6] tracking-tight">
                    Secure Online conferencing from any device on even low
                    bandwidth network at an unbelievable price.
                  </h3>
                </div>

                <ol className="bg-slate-200/[0.5] p-2 rounded-lg text-black/[0.8] text-justify font-semibold text-sm md:text-lg space-y-2 list-inside list-disc">
                  <li>
                    Secure: 2-factor authentication based access, organizational
                    role based access control, encryption over wire, encryption
                    at rest
                  </li>
                  <li>
                    No apps or special devices needed. A modern browser on any
                    PC or mobile phone is all that is needed
                  </li>
                  <li>
                    Unlimited secure cloud stored recordings, with video
                    indexing, rich composite recording playback
                  </li>
                  <li>
                    Powerful time-table manager for scheduled meetings.
                    One-click ad-hoc hosting with easy participant selection
                  </li>
                  <li>
                    Adaptive bitrate control, specially tuned for low bandwidth
                    situations
                  </li>
                  <li>
                    Rich feature-set for teachers such as Second Device™
                    technology, support for chalkboard, pen & paper based
                    teaching, shared whiteboards, real-time annotations,
                    synchronized video playback for all participants,
                    synchronized PowerPoint sharing, live polls, engagement
                    tracking, etc.
                  </li>
                </ol>
              </div>

              <Image
                src="/images/Remote Study.gif"
                alt="image"
                width={400}
                height={400}
                className="max-w-xs lg:max-w-7xl"
              />
            </div>

            <div className="flex flex-col lg:grid grid-cols-[1fr_2fr] items-center justify-center gap-4 mt-8">
              <div className="flex justify-center">
                <Image
                  src="/images/university.gif"
                  alt="image"
                  width={400}
                  height={400}
                   className="max-w-xs lg:max-w-7xl"
                />
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-black/[0.8] text-justify text-3xl lg:text-5xl font-bold font-sans capitalize">
                    Virtual University
                  </h3>
                  <h3 className="text-2xl lg:text-3xl text-justify text-black/[0.6] tracking-tight">
                    Online Classes + LMS + Assessments + Remote Proctoring +
                    Interactive Courses
                  </h3>
                </div>

                <ol className="bg-slate-200/[0.5] p-2 rounded-lg text-black/[0.8] text-justify font-semibold text-sm md:text-lg space-y-2 list-inside list-disc">
                  <li>
                    Powerful learning management system (LMS) with complete data
                    isolation between different schools
                  </li>
                  <li>
                    Organizations & user management with role based access
                    control with secure multi-factor authentication
                  </li>
                  <li>
                    Curriculum management, controllable at individual as well as
                    organization hierarchy level
                  </li>
                  <li>
                    Rich online course authoring & design with support for rich
                    media, animations, etc.
                  </li>
                  <li>
                    Auto-evaluated question types include computer programming
                    in multiple languages, variants of multiple choice, fill in
                    the blanks, numerical type, match columns, spoken English,
                    reading comprehension, listening comprehension, etc.
                  </li>
                  <li>
                    Manually evaluated question types include subjective essay,
                    viva voce, document upload, etc.
                  </li>
                  <li>Timed assignments and self-paced exercises</li>
                  <li>
                    Testing and assessment platform with remote proctoring
                  </li>
                  <li>Secure digital vault for question banks</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-4 mt-3 up_round">
            <div className="text-black/[0.8] font-bold text-3xl lg:text-5xl">
              Customers
              <h3 className="text-black/[0.6] mb-4 text-xl lg:text-3xl">
                Listed below are a small subset of our customers
              </h3>
            </div>
            <div className="">
              <Table />
            </div>
          </div>
        </Layout>
      </main>
    );
  } else {
    return (
      <main>
        <Layout2>
          <div className="seashell flex justify-center">
            <div className=" grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-10 mx-10 my-5 max-w-xl lg:max-w-5xl">
              <Cards
                text="click here to view all your courses/subjects"
                button="COURSES"
                src="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                href="/Courses"
                color="orange"
              />
              <Cards
                text="click here to do coding in the code editor"
                button="CODE EDITOR"
                src="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                href="/Coding"
                color="purple"
              />
              <Cards
                text="click here to access tools"
                button="TOOLS"
                src="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                href="/Tools"
                color="green"
              />
              <Cards
                text="click here to reach us"
                button="HELP AND SUPPORT"
                src="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                href="/Help&Support"
                color="gray"
              />
            </div>
          </div>
        </Layout2>
      </main>
    );
  }
}
