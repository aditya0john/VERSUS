import Layout2 from "@/components/Layout2";
import React from "react";

export default function Score() {
  return (
    <Layout2>
      <div className="bg-white m-1 rounded-lg">
        <div className="scale-95 bg-gray-200 rounded-lg">
          <div className="p-3 rounded-lg">
            <div>
              <p className="phdg font-bold flex flex-col items-center">
                <i>What is C++? What is its history?</i>
              </p>
              <p className="p-3 pt-0 shdg">
                In Layman terms :-
                <li>
                  It is a logical language that helps us to do mostly everything
                  from general purpose to heavy programming.
                </li>
                <br />
                We can convert our real world scenarios into programming and the
                best language to start your journey from a beginner to a
                professional in programming would be C++, as it will lay down
                every classic and modern concepts of programming today.
                <br />
                <br />
                C++ can be used create <i>Desktop Applications</i> (word
                processors, spreadsheets etc),
                <i> Games </i>(Console games, Mobile Device games),
                <i> Operating Systems </i>(Device Drivers),
                <i> Web Browsers</i> etc
                <br />
                <br />
                In Technical terms:
                <li>
                  C++ is a general purpose programming language created in
                  addition with OOP (Object Oriented Programming) features, such
                  as classes and inheritance to C (older version of C++ wihtout
                  OOP).
                </li>
                <br />
                <i>Bjarne Stroustrup</i>, released c++ in 1985.He started
                working on C++ in 1979 at Bell Labs.He wanted to add
                object-Oriented features to the C language without sacrificing
                its efficiency and speed.
              </p>
            </div>

            <div>
              <p className="phdg font-bold flex flex-col items-center">
                <i>Why is C++ over C?</i>
              </p>
              <p className="p-3 pt-0 shdg">
                To know why one should learn or use C++ over C, one should know
                what cons does C have as a programming language.
                <br />
                <br />
                <p>
                  ***
                  <i>
                    <b>Quote</b> (Here, C is being considered a con because we
                    are comparing it with another languages which are more
                    prominent and better than C in terms of understandability,
                    useability, cross-platform perfomance, OOP and more) every
                    language is in itself prominent, its just that today C won't
                    meet the standards in a healthy comparison.
                  </i>
                  ***
                </p>
                C is a low-level language and lacks many high-level programming
                features, some <i>Cons</i> of C are :-
                <br />
                <p className="p-3">
                  <li>
                    <i>
                      No Abstraction : This feature helps programmers to
                      maintain a level of secrecy inside the code, any place
                      where data or functions are being handled, copied, shared
                      or used respectively whether it be Functions, Classes,
                      Structures or anything of that sort.
                    </i>
                  </li>
                  <br />
                  <li>
                    <i>
                      No OOP : this is the biggest setback that made it less
                      real world applicable because OOP is a real world concept
                      which you can think of as inheritance (example :Family
                      etc) or connections (example: Friends etc) without which
                      real world is empty.
                    </i>
                  </li>
                  <br />
                  <li>
                    <i>
                      Unsafe Pointer Techniques : C allows for pointers
                      arithmetic and direct memory access, which can lead to
                      bugs and crashes and unexpected errors.
                    </i>
                  </li>
                  <br />
                  <li>
                    <i>
                      Less Readable Code : the code written in C is harder to
                      understand and read as it lacks high level abstraction and
                      its syntax is not easy to read too.
                    </i>
                  </li>
                  <br />
                  <li>
                    <i>
                      Platform Dependecy : high-level programming languages come
                      with features where their code can be compiled or run in
                      many different platform independent of where it was
                      written natively which C lacks.
                    </i>
                  </li>
                </p>
                <p className="phdg font-bold flex flex-col items-center">
                  Now WHY?? C++ over C
                </p>
                <p className="p-3 pt-0 shdg">
                  To answer this we can simply understand the diffences between
                  two types of programming cultures:-
                  <table className="flex justify-center mt-4">
                    <tbody className="border border-black p-3">
                      <th>
                        <tr className="grid grid-cols-2">
                          <td>Procedural Programming</td>
                          <td>Object Oriented Programming</td>
                        </tr>
                      </th>
                      <tr className="grid grid-cols-2">
                        <td>1. Main emphasis is </td>
                      </tr>
                    </tbody>
                  </table>
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout2>
  );
}
