import Link from "next/link";
import React from "react";

function Calendar({ children }) {
  let i;
  if (children === "January") {
    i = 31;
  } else if (children === "February") {
    i = 28;
  } else if (children === "March") {
    i = 31;
  } else if (children === "April") {
    i = 30;
  } else if (children === "May") {
    i = 31;
  } else if (children === "June") {
    i = 30;
  } else if (children === "July") {
    i = 31;
  } else if (children === "August") {
    i = 30;
  } else if (children === "September") {
    i = 31;
  } else if (children === "October") {
    i = 30;
  } else if (children === "November") {
    i = 31;
  } else if (children === "December") {
    i = 30;
  }

  return (
    <>
      <span className="p-3 bg-purple-200 rounded-md">
        <p className="font-bold shdg justify-center flex">{children}</p>
        <hr />
        <span className="gridd-data gap-2">
          <span className="grid">
            <Link
              href="/Courses"
              className="w-10 justify-center flex box bg-gray-400 p-2 rounded-full text-decoration-none text-black"
            >
              23
            </Link>
          </span>
        </span>
      </span>
    </>
  );
}

export default Calendar;
