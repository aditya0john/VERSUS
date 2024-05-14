import Layout2 from "@/components/Layout2";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";

export default function Score() {
  const [selectedDivIndex, setSelectedDivIndex] = useState(1);
  const [divs, setDivs] = useState([]);

  useEffect(() => {
    // Extract divs with ids and store them in state

    setDivs(document.querySelectorAll("div[id]"));

    // Count the number of divs with id attribute
    const count = divs.length;
    console.log(`Number of divs with id attribute: ${count}`, divs);
  }, [divs]);

  return (
    <Layout2>
      <div className="gride mt-4">
        <div className="bg-gray-200 p-3 rounded-lg flex flex-col gap-4">
          <p className="flex items-center justify-center phdg">TOPIC</p>
          {Array.from(document.querySelectorAll("div[id]")).map(
            (div, index) => (
              <button
                className="items-center bradius p-4 bg-gray-300 change"
                key={index}
                onClick={() => setSelectedDivIndex(index)}
              >
                {index}
              </button>
            )
          )}
        </div>
        <div className="bg-black text-white p-3 scale-95 rounded">
          {ReactHtmlParser(divs[selectedDivIndex]?.innerHTML)}
        </div>
      </div>
      <div className="seashell m-1 rounded-lg">
        <div className="scale-95 bg-gray-200 rounded-lg">
          <div className="p-3 rounded-lg">
            <div id="1">
              <div>
                <p className="p-3 pt-0 shdg">
                  <br />
                  <pre className="flex flex-col items-center pb-0 shdg">
                    <b className="phdg mb-4">BASIC SYNTAX OF C++</b>
                    {
                      "#include <iostream> <---------- THIS CONTAINS A PREPROCESSOR DIRECTIVE ALONG WITH A HEADER FILE \n#include<conio.h>   <--------- THIS TOO IS A HEADER FILE AND A PREPROCESSOR DIRECTIVE\n\nusing namespace std;\n\nint main() <----------- THIS CONTAINS THE MAIN BODY OF THE PROGRAM\n{\n  // Your C++ code here\n  return 0;\n}"
                    }
                  </pre>
                </p>
              </div>
              <ul>
                <li className="shdg p-3 pt-0">
                  <i className="shdg font-bold">Prepreocessor Directive:</i> The{" "}
                  <i>&apos;#&apos; </i>
                  in the line <i>&apos;#include&apos;</i> shows that it is a
                  preprocessor directive which means this header file has to be
                  included and processed before the program is compiled.
                </li>
              </ul>
              <ul>
                <li className="shdg p-3 pt-0">
                  <i className="shdg font-bold">Header File:</i> C++ has a
                  library that contains fundamental lines of code which contains
                  many functions, logics and much more complex code that can be
                  imported in your code and can be used to perform many
                  operations.
                </li>
              </ul>
              <ul>
                <li className="shdg p-3 pt-0">
                  <i className="shdg font-bold">Main( ):</i> When after
                  compilation the program is made to RUN the code will start
                  from MAIN( ) and end at MAIN( ). Eveything inside the MAIN( )
                  function will be executed line-to-line.
                </li>
              </ul>
            </div>

            <div id="2">
              <p className="phdg font-bold flex justify-center uppercase">
                <i>Data Types in C++</i>
              </p>
              <p className="shdg p-3 pt-0">
                The type of data That a variable may hold in a programming
                language are called the <i>Data Types</i>. The ability to divide
                data into different types in C enables you to work with complex
                objects. There are three categories of data types:
                <p className="p-4 shdg">
                  <i>
                    <li>User defined Data type.</li>
                    <li>Built in data type.</li>
                    <li>Derived data type.</li>
                  </i>
                </p>
                <p>
                  <ul>
                    <li className="shdg pt-0">
                      <i className="shdg font-bold">User defined Data type: </i>
                      User defined data type enables a user to invent his/her
                      own data rights and define what value it can take. This
                      can help the program listings more readable, In the case
                      of a complicated program, or when more than one programmer
                      works on it. Thus, this data type would help a programmer
                      to reduce programming errors.
                    </li>
                  </ul>
                  <ul>
                    <li className="shdg pt-0">
                      <i className="shdg font-bold">Built in data type:</i>{" "}
                      There are three built-in data types in C++;
                      <p className="p-4 shdg">
                        <i>
                          <li>
                            <b>Integral data type:</b> This can be classified
                            into:
                            <p className="p-2 shdg">
                              <i>
                                <li>
                                  1. Int: It is treated as an integer and it
                                  cannot hold fractional values. Just like the
                                  number line but without the decimal values.
                                  Taking from 2 bytes to 4 bytes ranging from
                                  -2,14,74,83,648 to 2,14,74,83,647.
                                  <br />
                                  <br />
                                  for example: if a variable is to hold student
                                  number or examination marks out of 100, then
                                  an <i>int</i> type will be more than
                                  sufficient. However if the variable is to
                                  hold, for example the population of India,
                                  then the int type will be too small, and a{" "}
                                  <i>long int</i> data type will be required.
                                </li>
                                <br />
                                <li>
                                  2. Char: this can hold both integer valuers
                                  and character data along with special
                                  characters. This can be classified into:
                                  <ul>
                                    <li>
                                      Signed : taking spaaec of 1 byte ranging
                                      from -128 to 127 default 0 to 225.
                                    </li>
                                    <li>
                                      Unsigned : taking space of 1 byte ranging
                                      from -128 to 127.
                                    </li>
                                    <li>
                                      Short : taking space of 2 bytes ranging
                                      from -32,768 to 32,767
                                    </li>
                                  </ul>
                                  <br />
                                  for example: using ASCII code, the number of
                                  65 and the character &apos;A&apos; are
                                  quivalent &apos;A&apos;. Data &apos;A&apos;,
                                  or any other single character between
                                  apostrophes, is known as character constant.
                                  <br />
                                  <br />
                                  for examlpe: Unsigned, in a class the number
                                  of students can never be less than zero.
                                  <br />
                                  <br />
                                  for example: float can be used in places where
                                  we need larger decimal numbers to meet
                                  accuracy.
                                </li>
                              </i>
                            </p>
                          </li>
                          <li>
                            <b>Floating point data type:</b> This can be
                            classified into:
                            <p className="p-2 shdg">
                              <i>
                                <li>
                                  1. Float: Since integers are not adequate for
                                  representing very large values of numbers and
                                  fractions For this, we need floating point
                                  type of data representation taking space of 4
                                  bytes ranging from 1.17E -38 to 3.40E +38. The
                                  simplest method is to place a decimal point in
                                  the number for example:
                                  <i> 0.00035 and 0.000001.</i>
                                </li>
                                <li>
                                  2. Double: The word double stands for double
                                  precision. It is capable of representing Real
                                  numbers taking space of 8 bytes ranging From
                                  2.2E -308 to 1.7E +308
                                </li>
                              </i>
                            </p>
                          </li>
                          <li>
                            <b>Void type:</b> This has two important purposes.
                            The first is to indicate that function does not
                            return a value,for example: void func(a,b) and the
                            other is to declare a generic pointer for example:
                            extern func(x,y) this tells the compiler that if the
                            function returns a value then it is a mistake or
                            should be flagged as an error.
                          </li>
                        </i>
                      </p>
                    </li>
                  </ul>
                </p>
              </p>
            </div>
            <div id="3">
              <p className="phdg font-bold flex justify-center uppercase">
                <i>Variables in C++, Naming Conventions.</i>
              </p>
              <p className="shdg p-3 pt-0">
                Now that you know what data types are we are going to learn how
                to use them. Just like edibles are kept inside a fridge to
                preserve them and the technolodgy keeps them cold we still need
                a container to keep everything right in the same way we need a
                container to be able to keep data this container is a
                <i> Variable</i>.
                <br />
                <br />
                <div className="grid grid-rows-2">
                  <div>
                    <p className="p-4 pt-0 shdg">
                      <div className="gridd">
                        <p className="flex items-center phdg">SYNTAX: </p>
                        <div>
                          {" "}
                          <b> Declaring a single variable:</b>
                          <br /> data_type variable_name;
                          <br />
                          <br />
                          <b>Declaring multiple variables:</b>
                          <br />
                          Data_type variable1_name, variable2_name,
                          variable3_name;
                          <br />
                          <br />
                        </div>
                      </div>
                      <hr />
                      <br />
                      <br />
                      <div className="gridd">
                        <p className="flex items-center phdg">RULES:</p>
                        <div className="uppercase">
                          <i>
                            <li>
                              The name of the variable contains letters, digits,
                              and underscores.
                            </li>
                            <li>
                              The name of the variable is case sensitive (ex Arr
                              and arr both are different variables).
                            </li>
                            <li>
                              The name of the variable does not contain any
                              whitespace and special characters (ex #,$,%,*,
                              etc).
                            </li>
                            <li>
                              All the variable names must begin with a letter of
                              the alphabet or an underscore(_).{" "}
                            </li>
                            <li>
                              We cannot used C++ keyword(ex
                              float,double,class)as a variable name.
                            </li>
                          </i>
                        </div>
                      </div>
                      <br />
                      <hr />
                      <br />
                      <br />
                      <div className="gridd">
                        <p className="flex items-center phdg">
                          NAMING <br />
                          CONVENTIONS:
                        </p>
                        <div>
                          {" "}
                          <b>Valid variable names:</b>
                          <br /> int x; //can be letters
                          <br />
                          int _yz; //can be underscores <br />
                          int z40; //can be letters
                          <br />
                          <br />
                          <b>Invalid variable names:</b>
                          <br /> int 89; //Should not be a number
                          <br />
                          int a b; //Should not contain any whitespace
                          <br /> int double; // C++ keyword can not be used.
                          <br />
                          <br />
                          <b>Declaring integer variable:</b>
                          <br />
                          int time, speed;
                          <br />
                          <br />
                          <b>Declaring float variable:</b>
                          <br />
                          float simpleInterest;
                          <br />
                          <br />
                          <b>Declaring character variable:</b>
                          <br />
                          char var;
                        </div>
                      </div>
                    </p>
                  </div>
                  <div>
                    <Image
                      height={200}
                      width={200}
                      src="/images/variables.png"
                      alt="image"
                    />
                  </div>
                </div>
                <p className="p-4 pt-0 shdg"></p>
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </Layout2>
  );
}
