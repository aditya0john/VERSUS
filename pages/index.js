import Layout from "@/components/Layout";
import Layout2 from "@/components/Layout2";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

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

  let photos = [1, 2, 3, 4, 5];

  let photo = {
    1: "/images/logo.png",
    2: "/images/logo_inverted.png",
    3: "/images/courses.png",
    4: "/images/logo.png",
  };

  if (!session) {
    return (
      <main className="w-full h-full">
        <Layout>
          <div className="gridd items-flex-end">
            <div>
              {photos.map((x, i) => {
                return (
                  <>
                    <div className="flip_images">
                      <img
                        id="flip_images"
                        className="ml-20"
                        src={photo[x]}
                        width={300}
                      />
                    </div>
                  </>
                );
              })}
            </div>

            <div className="flex gap-20 justify-center text-center items-center mt-10">
              <div className="text-black hdg flex-row">
                Your Virtual University, in minutes!
                <p className="shdg text-gray-200">
                  Online Classes, Assesments, proctored Exams, Assignments, Auto
                  Grading, Plagrism check ----All in one platform.
                </p>
                <Link
                  href="/"
                  className="box text-decoration-none text-black bg-yellow-100 rounded-md p-3 px-4 shdg"
                >
                  sale enquiry
                </Link>
              </div>
            </div>
          </div>

          <div className="gridd-data gap-5 mt-20 p-10 text-black">
            <span className="bg-yellow-100 shdg round text-center box">
              <img
                className="p-2"
                src="/images/logo.png"
                alt="images"
                width={100}
              />
              <span>{Institutions}</span>
              <p className="font-bold">Institution's</p>
            </span>

            <span className="bg-yellow-100 shdg round text-center box">
              <img
                className="p-2"
                src="/images/logo.png"
                alt="images"
                width={100}
              />
              <span>{Teacher}</span>
              <p className="font-bold"> Teacher's</p>
            </span>

            <span className="bg-yellow-100 shdg round text-center box">
              <img
                className="p-2"
                src="/images/logo.png"
                alt="images"
                width={100}
              />
              <span>{Learners}</span>
              <p className="font-bold">Learner's</p>
            </span>

            <span className="bg-yellow-100 shdg round text-center box">
              <img
                className="p-2"
                src="/images/logo.png"
                alt="images"
                width={100}
              />
              <span>{Meetings}</span>
              <p className="font-bold">Meeting's</p>
            </span>

            <span className="bg-yellow-100 shdg round text-center box">
              <img
                className="p-2"
                src="/images/logo.png"
                alt="images"
                width={100}
              />
              <span>{Tests}</span>
              <p className="font-bold">Test's</p>
            </span>

            <span className="bg-yellow-100 shdg round text-center box">
              <img
                className="p-2"
                src="/images/logo.png"
                alt="images"
                width={100}
              />
              <span>{Assignments}</span>
              <p className="font-bold">Assignment's</p>
            </span>
          </div>

          <div className="carouselslide m-20">
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
          </div>

          <div className="flex gap-20 items-center mt-20 h-screen">
            <div className="left flex">
              <img
                src="/images/logo.png"
                alt="image"
                width={300}
                height={300}
              />
            </div>

            <div className="right mr-20 ">
              <div className="text-black content">
                <p className="phdg">
                  AI assisted Assessment platform with Online Remote Proctoring
                </p>

                <p className="shdg text-gray-200 ">
                  Comprehensive remote Assessment platform with support for a
                  variety of tests & an ultra-powerful remote proctoring
                  solution for uncontrollable test-taker environments.
                </p>

                <ol>
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
          </div>

          <div className="flex gap-10 items-center mt-10 h-screen ">
            <div className="left ml-20 ">
              <div className="text-black content">
                <p className="phdg">Live meetings</p>

                <p className="shdg text-gray-200">
                  Secure Online conferencing from any device on even low
                  bandwidth network at an unbelieveable price
                </p>

                <ol>
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
            </div>

            <div className="right">
              <img
                src="/images/logo.png"
                alt="image"
                width={300}
                height={300}
              />
            </div>
          </div>

          <div className="flex gap-10 items-center mt-10 h-screen text-black">
            <div className="left ml-20">
              <img
                src="/images/logo.png"
                alt="image"
                width={300}
                height={300}
              />
            </div>

            <div className="right mr-40 content">
              <p className="phdg"> Virtual university / school</p>

              <p className="shdg text-gray-200">
                Online Classes + LMS + Assessments + Remote Proctoring +
                Interactive Courses
              </p>

              <ol>
                <li>
                  • Powerful leaming management system (LMS) with complete data
                  isolation between different schools
                </li>
                <li>
                  • Organizations & user management with role based access
                  control with secure multi-factor authentication
                </li>
                <li>
                  • Curriculum management, controllable at individual as well as
                  organization hierarchy level
                </li>
                <li>
                  • Rich online course authoring & design with support for rich
                  media, animations, etc.
                </li>
                <li>
                  • Auto-evaluated question types include computer programming
                  in multiple languages, variants of multiple choice, fill in
                  the blanks, numerical type, match columns, spoken english,
                  reading comprehension, listening comprehension, etc.
                </li>
                <li>
                  • Manually evaluated question types include subjective essay,
                  viva voce, document upload, etc.
                </li>
                <li>• Timed assignments and self-paced exercises</li>
                <li>
                  • Testing and assessment platform with remote proctoring
                </li>
                <li>• Secure digital vault for question banks</li>
              </ol>
            </div>
          </div>

          <div className="flex gap-10 items-center mt-10 h-screen">
            <div className="ml-20">
              <div className="text-black content">
                <h3 className="phdg">
                  {" "}
                  AI assisted Assessment platform with Online Remote Proctoring
                </h3>

                <p className="shdg text-gray-200">
                  Learn by doing, hands-on practice with instant feedback and
                  corrective help, self paced interactive courses
                </p>

                <p>
                  <ol>
                    <li className="shdg ">
                      {" "}
                      Courses on computer science fundamentals
                    </li>
                    <ul>
                      <li>
                        • Computational Thinking & Programming for Problem
                        Solving
                      </li>
                      <li>• Data Structures in C</li>
                      <li>• Data Structures in C++</li>
                      <li>• Design and Analysis of Algorithms in C</li>
                      <li>• Design and Analysis of Algorithms in C++</li>
                    </ul>

                    <li className="shdg"> Advanced Data Structures in C</li>
                    <ul>
                      <li>• Advanced Data Structures in C++</li>
                      <li>• Data Structures in Python</li>
                      <li>
                        • Instructor led Internship Programs with Projects D
                      </li>
                      <li>• Practical Artificial Intelligence</li>
                    </ul>
                    <li className="shdg"> Internet of Things</li>
                    <ul>
                      <li>• Fundamentals of Machine Learning &</li>
                      <li>• Data Science</li>
                    </ul>
                  </ol>
                </p>
              </div>
            </div>
          </div>

          <div className="ml-10 mr-10">
            <div className="text-black phdg flex-row">
              Customers
              <h3 className="shdg text-gray-200 mb-4">
                Listed below are a small subset of our customers
              </h3>
            </div>

            <table className="box bg-gray-300 table w-full">
              <tr>
                <th>
                  <div className="justify-center flex">
                    <Link href="/" className="con">
                      <img
                        src="/images/logo.png"
                        alt="image1"
                        width={100}
                        height={100}
                      ></img>
                    </Link>
                  </div>
                </th>
                <th>
                  <span className="justify-center flex">
                    <Link href="/" className="con">
                      <img
                        src="/images/logo.png"
                        alt="image1"
                        width={100}
                        height={100}
                      ></img>
                    </Link>
                  </span>
                </th>
                <th>
                  <div className="justify-center flex">
                    <Link href="/" className="con">
                      <img
                        src="/images/logo.png"
                        alt="image1"
                        width={100}
                        height={100}
                      ></img>
                    </Link>
                  </div>
                </th>
                <th>
                  <div className="justify-center flex">
                    <Link href="/" className="con">
                      <img
                        src="/images/logo.png"
                        alt="image1"
                        width={100}
                        height={100}
                      ></img>
                    </Link>
                  </div>
                </th>
              </tr>

              <tr>
                <th>
                  <div className="justify-center flex">
                    <Link href="/" className="con">
                      <img
                        src="/images/logo.png"
                        alt="image1"
                        width={100}
                        height={100}
                      ></img>
                    </Link>
                  </div>
                </th>
                <th>
                  <div className="justify-center flex">
                    <Link href="/" className="con">
                      <img
                        src="/images/logo.png"
                        alt="image1"
                        width={100}
                        height={100}
                      ></img>
                    </Link>
                  </div>
                </th>
                <th>
                  <div className="justify-center flex">
                    <Link href="/" className="con">
                      <img
                        src="/images/logo.png"
                        alt="image1"
                        width={100}
                        height={100}
                      ></img>
                    </Link>
                  </div>
                </th>
                <th>
                  <div className="justify-center flex">
                    <Link href="/" className="con">
                      <img
                        src="/images/logo.png"
                        alt="image1"
                        width={100}
                        height={100}
                      ></img>
                    </Link>
                  </div>
                </th>
              </tr>
              <tr>
                <th>
                  <div className="justify-center flex">
                    <Link href="/" className="con">
                      <img
                        src="/images/logo.png"
                        alt="image1"
                        width={100}
                        height={100}
                      ></img>
                    </Link>
                  </div>
                </th>
                <th>
                  <div className="justify-center flex">
                    <Link href="/" className="con">
                      <img
                        src="/images/logo.png"
                        alt="image1"
                        width={100}
                        height={100}
                      ></img>
                    </Link>
                  </div>
                </th>
                <th>
                  <div className="justify-center flex">
                    <Link href="/" className="con">
                      <img
                        src="/images/logo.png"
                        alt="image1"
                        width={100}
                        height={100}
                      ></img>
                    </Link>
                  </div>
                </th>
                <th>
                  <div className="justify-center flex">
                    <Link href="/" className="con">
                      <img
                        src="/images/logo.png"
                        alt="image1"
                        width={100}
                        height={100}
                      ></img>
                    </Link>
                  </div>
                </th>
              </tr>
              <tr>
                <th>
                  <div className="justify-center flex">
                    <Link href="/" className="con">
                      <img
                        src="/images/logo.png"
                        alt="image1"
                        width={100}
                        height={100}
                      ></img>
                    </Link>
                  </div>
                </th>
                <th>
                  <div className="justify-center flex">
                    <Link href="/" className="con">
                      <img
                        src="/images/logo.png"
                        alt="image1"
                        width={100}
                        height={100}
                      ></img>
                    </Link>
                  </div>
                </th>
                <th>
                  <div className="justify-center flex">
                    <Link href="/" className="con">
                      <img
                        src="/images/logo.png"
                        alt="image1"
                        width={100}
                        height={100}
                      ></img>
                    </Link>
                  </div>
                </th>
                <th>
                  <div className="justify-center flex">
                    <Link href="/" className="con">
                      <img
                        src="/images/logo.png"
                        alt="image1"
                        width={100}
                        height={100}
                      ></img>
                    </Link>
                  </div>
                </th>
              </tr>
            </table>
          </div>
        </Layout>
      </main>
    );
  } else {
    return (
      <main className="bg-black w-full h-full">
        <Layout2>
          <div className="mt-20 h-screen scale-75">
            <div className="grid grid-cols-3 gap-10 ml-5 mr-5">
              <div className="card box con">
                <div className="con_upper p-1">
                  <img
                    src="/images/courses.png"
                    className="card-img-top bg-white"
                    alt="..."
                  />
                </div>
                <div className="card-body mt-10 p-0 con_lower">
                  <div className="card-text text-center p-1 h-20">
                    Click here to view all your courses / subjects.
                  </div>
                  <div className="items-center justify-center rounded-md flex card-body bg-yellow-400">
                    <Link
                      href="/Courses"
                      className="text-decoration-none text-black"
                    >
                      Courses
                    </Link>
                  </div>
                </div>
              </div>

              {/* <div className="card box con">
                <div className="con_upper"><img src="/images/test.png" className="card-img-top bg-white" alt="..." /></div>
                <div className="card-body mt-10 p-0 con_lower">
                  <div className="card-text text-center p-1 h-20">Click here to view all you scheduled or completed tests.</div>
                  <div className="items-center justify-center rounded-md flex card-body bg-yellow-400"><Link href="/Test" className="text-decoration-none text-black">Test</Link></div>
                </div>
              </div>

              <div className="card box con">
                <div className="con_upper p-1"><img src="/images/labs.png" className="card-img-top bg-white" alt="..." /></div>
                <div className="card-body mt-10 p-0 con_lower">
                  <div className="card-text text-center p-1 h-20">Click here to view all your programming labs.</div>
                  <div className="items-center justify-center rounded-md flex card-body bg-yellow-400"><Link href="/ProgLabs" className="text-decoration-none text-black">Programming labs</Link></div>
                </div>
              </div> */}

              <div className="card box con">
                <div className="con_upper p-1">
                  <img
                    src="/images/tools.png"
                    className="card-img-top bg-white"
                    alt="..."
                  />
                </div>
                <div className="card-body mt-10 p-0 con_lower">
                  <div className="card-text text-center p-1 h-20">
                    Click here to access tools.
                  </div>
                  <div className="items-center justify-center rounded-md flex card-body bg-yellow-400">
                    <Link
                      href="/Tools"
                      className="text-decoration-none text-black"
                    >
                      Tools
                    </Link>
                  </div>
                </div>
              </div>

              <div className="card box con">
                <div className="con_upper">
                  <img
                    src="/images/hs.png"
                    className="card-img-top bg-white"
                    alt="..."
                  />
                </div>
                <div className="card-body mt-10 p-0 con_lower">
                  <div className="card-text text-center p-1 h-20">
                    Click here to reach us.
                  </div>
                  <div className="items-center justify-center rounded-md flex card-body bg-yellow-400 bottom">
                    <Link
                      href="/Help&Support"
                      className="text-decoration-none text-black"
                    >
                      Help and Support
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout2>
      </main>
    );
  }
}
